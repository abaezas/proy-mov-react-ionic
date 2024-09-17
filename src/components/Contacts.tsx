

import React, { useState } from 'react'
import { Plus, Search, Edit2, Trash2, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

export function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Noah Helms", phone: "+1 234 567 890", email: "noah@asd.com" },
    { id: 2, name: "Andrés Baeza", phone: "+1 987 654 321", email: "andres@asd.com" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", phone: "", email: "" });
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddContact = () => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
    setNewContact({ name: "", phone: "", email: "" });
    setIsAddDialogOpen(false);
  };

  const handleUpdateContact = () => {
    if (editingContact) {
      setContacts(contacts.map(c => c.id === editingContact.id ? editingContact : c));
      setEditingContact(null);
    }
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#7440C0]">Contactos</h1>
        <div className="mb-4 flex items-center justify-between">
          <div className="relative flex-grow mr-4">
            <Input
              type="text"
              placeholder="Busca tus contactos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#7440C0] hover:bg-[#5f33a3]">
                <Plus size={20} className="mr-2" /> Añadir contactos
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Añade un contacto nuevo</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input
                  placeholder="Nombre"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                />
                <Input
                  placeholder="Teléfono"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                />
                <Input
                  placeholder="Email"
                  value={newContact.email}
                  onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                />
                <Button onClick={handleAddContact} className="w-full bg-[#7440C0] hover:bg-[#5f33a3]">
                  Añadir contacto
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {filteredContacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
              <div>
                <h2 className="text-lg font-semibold">{contact.name}</h2>
                <p className="text-sm text-gray-600">{contact.phone}</p>
                <p className="text-sm text-gray-600">{contact.email}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setEditingContact(contact)}
                >
                  <Edit2 size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  <Trash2 size={20} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {editingContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Editar Contacto</h2>
              <Button variant="ghost" size="icon" onClick={() => setEditingContact(null)}>
                <X size={20} />
              </Button>
            </div>
            <div className="space-y-4">
              <Input
                placeholder="Nombre"
                value={editingContact.name}
                onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
              />
              <Input
                placeholder="Teléfono"
                value={editingContact.phone}
                onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })}
              />
              <Input
                placeholder="Email"
                value={editingContact.email}
                onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
              />
              <Button onClick={handleUpdateContact} className="w-full bg-[#7440C0] hover:bg-[#5f33a3]">
                Actualizar Contacto
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}