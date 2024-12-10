"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ContactFormData } from '@/lib/types';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

export default function AdminPanel() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<ContactFormData[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchMessages(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchMessages = async (token: string) => {
    try {
      const response = await fetch('/api/messages', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      setMessages(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch messages",
        variant: "destructive",
      });
      setIsAuthenticated(false);
      localStorage.removeItem('adminToken');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      localStorage.setItem('adminToken', data.token);
      setIsAuthenticated(true);
      await fetchMessages(data.token);
      
      toast({
        title: "Success",
        description: "Successfully logged in",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
      setIsAuthenticated(false);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setMessages([]);
    setUsername('');
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-8">Panel Administracyjny</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={isAuthenticating}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isAuthenticating}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isAuthenticating}
            >
              {isAuthenticating ? "Logowanie..." : "Zaloguj się"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Wiadomości Kontaktowe</h1>
          <Button onClick={handleLogout} variant="outline">
            Wyloguj się
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {messages.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Brak wiadomości do wyświetlenia
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imię</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wiadomość</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {messages.map((message, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(message.timestamp), 'PPp', { locale: pl })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{message.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{message.subject}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{message.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}