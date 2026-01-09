import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Check, ArrowLeft, Clock, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { format, addDays, setHours, setMinutes } from 'date-fns';
import { de } from 'date-fns/locale';
import marco from '../../assets/barbers/marco.webp';
import anna from '../../assets/barbers/anna.webp';
import thomas from '../../assets/barbers/thomas.webp';
import anyBarber from '../../assets/barbers/any.webp';

interface Barber {
  id: string;
  name: string;
  image: string;
  specialization: string;
}

interface Service {
  name: string;
  price: string;
  duration: string;
  description?: string;
}

interface BookingProps {
  preselectedService?: Service | null;
  preselectedCategory?: string | null;
  onClose: () => void;
  onOpenLegal?: (type: 'impressum' | 'datenschutz' | 'agb') => void;
}

const barbers: Barber[] = [
  {
    id: 'any',
    name: 'Beliebiger Friseur',
    image: anyBarber,
    specialization: 'Keine Präferenz - Wir weisen Ihnen den besten verfügbaren Friseur zu',
  },
  {
    id: '1',
    name: 'Marco Weber',
    image: marco,
    specialization: 'Klassische Herrenschnitte & Bartpflege',
  },
  {
    id: '2',
    name: 'Anna Schmidt',
    image: anna,
    specialization: 'Damenfrisuren & Colorationen',
  },
  {
    id: '3',
    name: 'Thomas Müller',
    image: thomas,
    specialization: 'Moderne Styles & Trends',
  },
];

const gentlemenServices: Service[] = [
  { name: 'Trockenhaarschnitt', price: '18€', duration: '30 Min' },
  { name: 'Waschen, Schneiden, Föhnen & Stylen', price: '20€', duration: '45 Min' },
  { name: 'Schneiden, Rasieren, Föhnen & Stylen', price: '30€', duration: '60 Min' },
  { name: 'Bartformrasur / Nassrasur', price: '15€', duration: '30 Min' },
  { name: 'Kinder bis 12 Jahre', price: '15€', duration: '30 Min' },
  { name: 'Augenbrauen zupfen', price: '12€', duration: '15 Min' },
  { name: 'Heißwachs Ohren u. Nase', price: '8€', duration: '15 Min' },
  { name: 'Kopfmassage', price: '15€', duration: '20 Min' },
  { name: 'Gesichtskur', description: 'Maske, Dampfbad, Massage', price: '20€', duration: '30 Min' },
  { name: 'Premium-Paket', description: 'Waschen, Schneiden, Bartrasur, Augenbrauen zupfen, Föhnen & Stylen', price: '40€', duration: '90 Min' },
];

const ladiesServices: Service[] = [
  { name: 'Waschen/Föhnen', price: 'ab 21€', duration: '30 Min' },
  { name: 'Waschen/Schneiden/Föhnen', price: 'ab 36,75€', duration: '60 Min' },
  { name: 'Coloration', price: 'ab 31,50€', duration: '90 Min' },
  { name: 'Gloss', price: 'ab 20,25€', duration: '45 Min' },
  { name: 'Neufärbung', price: 'ab 35,25€', duration: '90 Min' },
  { name: 'Effektsträhnen', price: 'ab 21,75€', duration: '60 Min' },
  { name: 'Strähnen am Oberkopf', price: 'ab 33€', duration: '75 Min' },
  { name: 'Strähnen komplett', price: 'ab 44,25€', duration: '120 Min' },
  { name: 'Balayage (mittellänges Haar)', description: 'inkl. Pflege und Gloss', price: 'ab 105€', duration: '150 Min' },
  { name: 'Balayage (langes Haar)', description: 'inkl. Pflege und Gloss', price: 'ab 120€', duration: '180 Min' },
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 19; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return slots;
};

export function Booking({ preselectedService, preselectedCategory, onClose, onOpenLegal }: BookingProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(preselectedService || null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    consent?: string;
  }>({});

  const timeSlots = generateTimeSlots();

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // German phone number format: starts with +49 or 0, followed by 9-12 more digits (10-13 total)
    const cleaned = phone.replace(/[\s\-]/g, '');
    const phoneRegex = /^(\+49|0)[0-9]{9,12}$/;
    return phoneRegex.test(cleaned);
  };

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!customerName.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    } else if (customerName.trim().length < 2) {
      newErrors.name = 'Der Name muss mindestens 2 Zeichen lang sein.';
    }

    if (!customerEmail.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    } else if (!validateEmail(customerEmail)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!customerPhone.trim()) {
      newErrors.phone = 'Bitte geben Sie Ihre Telefonnummer ein.';
    } else if (!validatePhone(customerPhone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein.';
    }

    if (!gdprConsent) {
      newErrors.consent = 'Bitte stimmen Sie den Datenschutzbestimmungen zu.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleBarberSelect = (barber: Barber) => {
    setSelectedBarber(barber);
    setStep(3);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date && selectedTime) {
      setStep(4);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      setStep(4);
    }
  };

  const handleConfirm = () => {
    if (validateForm()) {
      // In a real app, this would send the booking to the backend
      console.log('Booking confirmed:', {
        service: selectedService,
        barber: selectedBarber,
        date: selectedDate,
        time: selectedTime,
        customer: { name: customerName, email: customerEmail, phone: customerPhone },
      });
      setIsConfirmed(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    switch (field) {
      case 'name':
        setCustomerName(value);
        break;
      case 'email':
        setCustomerEmail(value);
        break;
      case 'phone':
        setCustomerPhone(value);
        break;
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-primary/50 p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2
              className="text-2xl sm:text-3xl text-foreground mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Buchung erfolgreich!
            </h2>
            <p className="text-muted-foreground mb-6">
              Ihre Buchung wurde erfolgreich übermittelt. Sie erhalten eine Bestätigungsmail an {customerEmail}.
            </p>
            <div className="bg-secondary/50 border border-border rounded-lg p-6 mb-6 text-left">
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">Service</div>
                  <div className="text-foreground">{selectedService?.name}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Barber</div>
                  <div className="text-foreground">{selectedBarber?.name}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Datum & Uhrzeit</div>
                  <div className="text-foreground">
                    {selectedDate && format(selectedDate, 'PPP', { locale: de })} um {selectedTime}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Dauer</div>
                  <div className="text-foreground">{selectedService?.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Preis</div>
                  <div className="text-primary">{selectedService?.price}</div>
                </div>
              </div>
            </div>
            <Button onClick={onClose} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full select-none">
              Zurück zur Startseite
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {step > 1 && (
              <button onClick={handleBack} className="text-foreground hover:text-primary cursor-pointer select-none">
                <ArrowLeft size={24} />
              </button>
            )}
            <div>
              <h1
                className="text-2xl sm:text-3xl text-foreground"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Termin buchen
              </h1>
              <p className="text-muted-foreground">
                Schritt {step} von 4
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-foreground hover:text-primary cursor-pointer select-none">
            Abbrechen
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  s <= step ? 'bg-primary' : 'bg-secondary'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div>
            <h2 className="text-xl mb-6 text-foreground">Wählen Sie eine Dienstleistung</h2>
            <Tabs defaultValue="gentlemen">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="gentlemen" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer transition-all duration-300">
                  Herren
                </TabsTrigger>
                <TabsTrigger value="ladies" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer transition-all duration-300">
                  Damen
                </TabsTrigger>
              </TabsList>
              <TabsContent value="gentlemen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gentlemenServices.map((service) => (
                    <Card
                      key={service.name}
                      onClick={() => handleServiceSelect(service)}
                      className="bg-card border-border hover:border-primary cursor-pointer transition-colors p-6"
                    >
                      <h3 className="text-foreground mb-2">{service.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground">{service.duration}</span>
                      </div>
                      {service.description && (
                        <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="ladies">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ladiesServices.map((service) => (
                    <Card
                      key={service.name}
                      onClick={() => handleServiceSelect(service)}
                      className="bg-card border-border hover:border-primary cursor-pointer transition-colors p-6"
                    >
                      <h3 className="text-foreground mb-2">{service.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground">{service.duration}</span>
                      </div>
                      {service.description && (
                        <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Step 2: Select Barber */}
        {step === 2 && (
          <div>
            <h2 className="text-xl mb-6 text-foreground">Wählen Sie Ihren Barber</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {barbers.map((barber) => (
                <Card
                  key={barber.id}
                  onClick={() => handleBarberSelect(barber)}
                  className="bg-card border-border hover:border-primary cursor-pointer transition-colors overflow-hidden"
                >
                  <img
                    src={barber.image}
                    alt={`${barber.name} - ${barber.role} at Schiersteiner Barbershop`}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-3">
                    <h3 className="text-base text-foreground mb-1">{barber.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{barber.specialization}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Select Date & Time */}
        {step === 3 && (
          <div>
            <h2 className="text-xl mb-6 text-foreground">Wählen Sie Datum und Uhrzeit</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <Card className="bg-card border-border p-6">
                <h3 className="text-foreground mb-4">Datum wählen</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md"
                />
              </Card>

              {/* Time Slots */}
              <div>
                <Card className="bg-card border-border p-6">
                  <h3 className="text-foreground mb-4">Uhrzeit wählen</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        variant={selectedTime === time ? 'default' : 'outline'}
                        size="sm"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Customer Details */}
        {step === 4 && (
          <div>
            <h2 className="text-xl mb-6 text-foreground">Ihre Kontaktdaten</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="bg-card border-border p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="mb-2">Name *</Label>
                    <Input
                      id="name"
                      value={customerName}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Max Mustermann"
                      className={`bg-input-background ${errors.name ? 'border-destructive' : 'border-border'}`}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 select-none">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerEmail}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="max@beispiel.de"
                      className={`bg-input-background ${errors.email ? 'border-destructive' : 'border-border'}`}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 select-none">Telefon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="0611 12345678"
                      className={`bg-input-background ${errors.phone ? 'border-destructive' : 'border-border'}`}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* GDPR Consent */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          id="gdpr-consent"
                          checked={gdprConsent}
                          onChange={(e) => {
                            setGdprConsent(e.target.checked);
                            if (errors.consent) {
                              setErrors((prev) => ({ ...prev, consent: undefined }));
                            }
                          }}
                          className="peer h-4 w-4 rounded border-border bg-input-background text-primary focus:ring-primary focus:ring-offset-0"
                        />
                      </div>
                      <span className="text-sm text-foreground/80">
                        Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                        <button
                          type="button"
                          onClick={() => onOpenLegal?.('datenschutz')}
                          className="text-primary hover:underline inline"
                        >
                          Datenschutzbestimmungen
                        </button>{' '}
                        zu. Meine Daten werden ausschließlich zur Terminverwaltung verwendet. *
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleConfirm}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 select-none"
                    >
                      Verbindlich buchen
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Summary */}
              <Card className="bg-secondary/50 border-border p-6">
                <h3 className="text-foreground mb-4">Zusammenfassung</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Service</div>
                    <div className="text-foreground">{selectedService?.name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Barber</div>
                    <div className="text-foreground">{selectedBarber?.name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Datum & Uhrzeit</div>
                    <div className="text-foreground">
                      {selectedDate && format(selectedDate, 'PPP', { locale: de })} um {selectedTime}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock size={16} />
                    <span>{selectedService?.duration}</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Preis</span>
                      <span className="text-primary text-xl">{selectedService?.price}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}