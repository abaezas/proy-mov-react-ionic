import React, { FormEvent } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Router, useHistory } from "react-router";

export function Login() {
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    history.push("/tabs/home");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-black"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patron_gps-gEbrSdKgAcM6M3UuUVS8kvMMRxJuXl.jpg')",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ubichek-19fOVRyodppEvzsaNmATfoecoI8gQ5.png"
            alt="UbiCheck Logo"
            className="h-20 w-20"
          />
        </div>
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ fontFamily: "'Harlow Solid Italic, cursive'" }}
        >
          UbiCheck
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="a@a.com"
              required
              className="text-gray-200"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
              <a href="#" className="text-sm text-purple-600 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="relative">
              <Input
                id="password"
                type="password"
                required
                className="text-gray-200"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Eye className="h-4 w-4" />
                <span className="sr-only">Revelar Contraseña</span>
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full text-neutral-50 bg-purple-600 hover:bg-purple-700 dark:text-neutral-50 dark:bg-purple-600 dark:hover:bg-purple-700"
          >
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Registrate
          </a>
        </div>
      </div>
    </div>
  );
}
