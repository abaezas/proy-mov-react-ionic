
import React, { useState } from 'react'
import { User, Camera, Lock, Bell, MapPin, Share2, HelpCircle, LogOut, Droplets, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { useHistory } from 'react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export function Profile() {
  const [user, setUser] = useState({
    name: "Bárbara Von Helms",
    email: "babi@asd.com",
    phone: "+1 234 567 890",
    profilePicture: "https://i.pravatar.cc/300"
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    locationUpdates: true
  });

  const weatherData = {
    temperature: 22,
    condition: "Partly Cloudy",
    humidity: 60,
  };

  const history = useHistory();

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-[#7440C0] dark:text-[#9d6fe7]">Ajustes de Perfil</h1>
          
          {/* Profile Picture Section */}
          <div className="mb-8 flex items-center">
            <div className="relative">
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="absolute bottom-0 right-0 rounded-full p-2 bg-[#7440C0] hover:bg-[#5f33a3] dark:bg-[#9d6fe7] dark:hover:bg-[#8257d5]"
                    size="icon"
                  >
                    <Camera size={20} className="text-white" />
                    <span className="sr-only">Cambiar foto de Perfil</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Cambiar foto de Perfil</DialogTitle>
                    <DialogDescription>
                      Sube una foto de perfil o elige de una de las de abajo.
                    </DialogDescription>
                  </DialogHeader>
                  {/* Add file upload input and avatar selection options here */}
                  <DialogFooter>
                    <Button type="submit">Guardar Cambios</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-semibold dark:text-white">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            </div>
          </div>

          <Separator className="my-6" />

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <User size={24} className="mr-2 text-[#7440C0] dark:text-[#9d6fe7]" />
              Datos Personales
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                <Input id="name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} className="mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <Input id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="mt-1" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Número de celular</label>
                <Input id="phone" type="tel" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} className="mt-1" />
              </div>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Security Section */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <Lock size={24} className="mr-2 text-[#7440C0] dark:text-[#9d6fe7]" />
              Seguridad
            </h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#7440C0] hover:bg-[#5f33a3] dark:bg-[#9d6fe7] dark:hover:bg-[#8257d5]">Cambiar Contraseña</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription>
                    Ingresa tu contraseña actual y tu contraseña nueva para actualizarla.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input type="password" placeholder="Contraseña Actual" />
                  <Input type="password" placeholder="Nueva Contraseña" />
                  <Input type="password" placeholder="Confirma tu Nueva Contraseña" />
                </div>
                <DialogFooter>
                  <Button type="submit">Actualizar Contraseña</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>

          <Separator className="my-6" />

          {/* Notification Settings */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <Bell size={24} className="mr-2 text-[#7440C0] dark:text-[#9d6fe7]" />
              Notificaciones
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="dark:text-gray-300">Notificaciones de Correo</span>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={() => handleNotificationChange('email')}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="dark:text-gray-300">Notificaciones</span>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={() => handleNotificationChange('push')}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="dark:text-gray-300">Alerta de Ubicación</span>
                <Switch
                  checked={notifications.locationUpdates}
                  onCheckedChange={() => handleNotificationChange('locationUpdates')}
                />
              </div>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Location Sharing Settings */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <MapPin size={24} className="mr-2 text-[#7440C0] dark:text-[#9d6fe7]" />
              Compartir Ubicación
            </h3>
            <div className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Share2 size={20} className="mr-2" />
                    Administrar Ubicación
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Administrar Ubicación</DialogTitle>
                    <DialogDescription>
                      Controla quién ve tu ubicación y por cuánto.
                    </DialogDescription>
                  </DialogHeader>
                  {/* Add shared locations management UI here */}
                  <DialogFooter>
                    <Button type="submit">Guardar Cambios</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin size={20} className="mr-2" />
                    Configurar Ubicación de Hogar
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Configurar Ubicación de Hogar</DialogTitle>
                    <DialogDescription>
                      Ubica tu hogar como referencia.
                    </DialogDescription>
                  </DialogHeader>
                  {/* Add home location setting UI here */}
                  <DialogFooter>
                    <Button type="submit">Guardar Ubicación de Hogar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Additional Options */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <HelpCircle size={24} className="mr-2 text-[#7440C0] dark:text-[#9d6fe7]" />
              Ayuda & Soporte
            </h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Contactar el soporte
              </Button>
              <Button variant="outline" className="w-full justify-start">
                FAQ
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Politica de Privacidad
              </Button>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Logout Button with Confirmation */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full">
                <LogOut size={20} className="mr-2" />
                Cerrar Sesión
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Estás seguro de que quieres cerrar sesión?</AlertDialogTitle>
                <AlertDialogDescription>
                  Ésta acción terminará tu sesión, tendrás que iniciar de nuevo para ingresar a tu cuenta.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{history.push("/")}}>Cerrar Sesión</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}