import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface LegalProps {
  type: 'impressum' | 'datenschutz' | 'agb';
  onClose: () => void;
}

export function Legal({ type, onClose }: LegalProps) {
  const content = {
    impressum: {
      title: 'Impressum',
      sections: [
        {
          heading: 'Angaben gemäß § 5 TMG',
          content: (
            <div className="space-y-2">
              <p>[Ihr Friseursalon Name]</p>
              <p>Inhaber: [Name des Inhabers]</p>
              <p>[Ihre Straße Hausnummer]</p>
              <p>[Ihre Postleitzahl] [Ihr Ort]</p>
            </div>
          ),
        },
        {
          heading: 'Kontakt',
          content: (
            <div className="space-y-2">
              <p>Telefon: [Ihre Telefonnummer]</p>
              <p>E-Mail: [Ihre E-Mail-Adresse]</p>
            </div>
          ),
        },
        {
          heading: 'Berufshaftpflicht',
          content: <p>Wir sind bemüht, alle Inhalte stets aktuell, vollständig und korrekt darzustellen. Trotzdem kann keine Haftung für die Aktualität, Korrektheit und Vollständigkeit der übermittelten Informationen übernommen werden.</p>,
        },
      ],
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      sections: [
        {
          heading: 'Datenschutzerklärung',
          content: (
            <div className="space-y-3">
              <p>Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir behandeln Ihre Daten vertraulich und gemäß der DSGVO.</p>
            </div>
          ),
        },
        {
          heading: 'Verantwortlich',
          content: (
            <div className="space-y-1">
              <p>[Ihr Name / Firmenname]</p>
              <p>[Adresse]</p>
              <p>[E-Mail-Adresse]</p>
            </div>
          ),
        },
        {
          heading: 'Erhebung und Nutzung',
          content: (
            <div className="space-y-3">
              <p>Wenn Sie einen Termin buchen, erfassen wir:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Gewünschter Termin und Service</li>
              </ul>
              <p>Diese Daten verwenden wir nur zur Terminverwaltung und -bestätigung. Eine Weitergabe an Dritte erfolgt nicht.</p>
            </div>
          ),
        },
        {
          heading: 'Rechtsgrundlage',
          content: (
            <p>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
          ),
        },
        {
          heading: 'Speicherung',
          content: (
            <p>Daten werden gelöscht, sobald sie für die Zwecke der Verarbeitung nicht mehr benötigt werden, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
          ),
        },
        {
          heading: 'Ihre Rechte',
          content: (
            <div className="space-y-3">
              <p>Sie können jederzeit:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Auskunft über Ihre Daten erhalten</li>
                <li>Falsche Daten korrigieren lassen</li>
                <li>Löschung Ihrer Daten verlangen</li>
                <li>Verarbeitung einschränken</li>
                <li>Ihre Einwilligung widerrufen</li>
                <li>Beschwerde bei der Datenschutzaufsichtsbehörde einreichen</li>
              </ul>
            </div>
          ),
        },
        {
          heading: 'Kontakt',
          content: (
            <p>[Datenschutz-E-Mail-Adresse]</p>
          ),
        },
      ],
    },
    agb: {
      title: 'Allgemeine Geschäftsbedingungen',
      sections: [
        {
          heading: 'Geltungsbereich',
          content: <p>Folgende Allgemeine Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die der [Ihr Friseursalon Name] erbringt.</p>,
        },
        {
          heading: 'Terminvereinbarung',
          content: (
            <div className="space-y-3">
              <p>Termine können telefonisch, online oder persönlich vereinbart werden. Die Vereinbarung wird mit Bestätigung des Termins verbindlich.</p>
              <p>Ein Termin sollte mindestens 24 Stunden im Voraus abgesagt oder verschoben werden. Bei späterer Absage oder Nichterscheinen behalten wir uns vor, die Kosten in Rechnung zu stellen.</p>
            </div>
          ),
        },
        {
          heading: 'Preise und Zahlung',
          content: (
            <div className="space-y-3">
              <p>Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt bar oder per EC-Karte direkt nach der Dienstleistung.</p>
              <p>Preisänderungen vorbehalten. Die zum Zeitpunkt der Dienstleistung gültigen Preise werden angewendet.</p>
            </div>
          ),
        },
        {
          heading: 'Haftung',
          content: <p>Für Schäden, die durch einfache Fahrlässigkeit verursacht werden, haftet der Barbershop nur bei Verletzung vertragswesentlicher Pflichten (Kardinalpflichten). Die Haftung ist dabei auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>,
        },
      ],
    },
  };

  const currentContent = content[type];

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-[100dvh] py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1
              className="text-3xl text-foreground"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {currentContent.title}
            </h1>
            <button
              onClick={onClose}
              className="text-foreground hover:text-primary transition-colors p-2 cursor-pointer"
              aria-label="Schließen"
            >
              <X size={32} />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl text-primary mb-3">{section.heading}</h2>
                <div className="text-foreground/80 leading-relaxed">{section.content}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <Button
              onClick={onClose}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Schließen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
