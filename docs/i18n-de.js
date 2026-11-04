// Authored du/Sie variants of the canonical English guide; neutral copy is shared.
window.guideGerman = Object.fromEntries(['du', 'sie'].map((form) => {
  'use strict';

  const address = (du, sie) => form === 'sie' ? sie : du;
  const html = String.raw;
  const clock = '<svg class="icon step-time-icon" aria-hidden="true" focusable="false"><use href="#i-clock"></use></svg>';
  const externalIcon = '<svg class="icon icon--external" aria-hidden="true" focusable="false"><use href="#i-external"></use></svg>';
  const newTab = '<span class="visually-hidden"> (öffnet einen neuen Tab)</span>';
  const stepTitle = (number, title) => `<span class="step-num" aria-hidden="true">${number}</span><span class="visually-hidden">Schritt ${number}: </span>${title}`;
  const navTitle = (number, title) => `<span class="visually-hidden">Schritt ${number}: </span>${title}<span class="visually-hidden" data-done-label hidden> (Kontrollpunkt erledigt)</span>`;
  const imageLink = (file) => `<a class="screenshot-open" href="assets/${file}" target="_blank" rel="noopener">In voller Größe öffnen${newTab}</a>`;
  const externalLink = (url, title) => `<a href="${url}" target="_blank" rel="noopener">${title}${newTab}${externalIcon}</a>`;

  // Keep translated table headings and the labels shown on small screens in sync.
  function table(headings, rows) {
    return `<thead role="rowgroup"><tr role="row">${headings.map((heading) =>
      `<th scope="col" role="columnheader">${heading}</th>`).join('')}</tr></thead>
<tbody role="rowgroup">${rows.map((row) => `<tr role="row">${row.map((cell, index) => index === 0
      ? `<th scope="row" role="rowheader">${cell}</th>`
      : `<td role="cell" data-label="${headings[index]}">${cell}</td>`).join('')}</tr>`).join('\n')}</tbody>`;
  }

  return [form, {
    messages: {
      themeLegend: 'Farbschema',
      lightChoice: 'Hell',
      darkChoice: 'Dunkel',
      pixelChoice: 'Pixel',
      lightEnabled: 'Heller Modus aktiviert.',
      darkEnabled: 'Dunkler Modus aktiviert.',
      pixelEnabled: 'Pixel-Design aktiviert.',
      languageChanged: 'Der Leitfaden ist jetzt auf Deutsch.',
      addressChanged: address('Der Leitfaden spricht dich jetzt mit „du“ an.', 'Der Leitfaden spricht Sie jetzt mit „Sie“ an.'),
      preferencesProblem: address(
        'Dieser Browser kann deine Design-, Sprach- oder Anredewahl nicht speichern. Sie gilt für diesen Besuch, kann aber beim Neuladen zurückgesetzt werden.',
        'Dieser Browser kann Ihre Design-, Sprach- oder Anredewahl nicht speichern. Sie gilt für diesen Besuch, kann aber beim Neuladen zurückgesetzt werden.'),
      translationProblem: address(
        'Die deutsche Übersetzung konnte nicht geladen werden. Lade die Seite neu, um es erneut zu versuchen.',
        'Die deutsche Übersetzung konnte nicht geladen werden. Laden Sie die Seite neu, um es erneut zu versuchen.'),
      progressTotal: ' von {total} Kontrollpunkten erledigt',
      continueStep: 'Mit Schritt {step} weitermachen',
      resetProgress: 'Fortschritt zurücksetzen',
      resetConfirm: 'Alle abgehakten Kontrollpunkte in diesem Browser zurücksetzen?',
      progressCleared: 'Fortschritt zurückgesetzt.',
      copyPrompt: 'Prompt kopieren: {title}',
      copy: 'Kopieren',
      copied: 'Kopiert',
      promptCopied: 'Prompt in die Zwischenablage kopiert.',
      manualCopy: '{key}+C drücken',
      copyBlocked: address(
        'Das Kopieren wurde blockiert. Der Prompt ist markiert; drücke {key} plus C, um ihn zu kopieren.',
        'Das Kopieren wurde blockiert. Der Prompt ist markiert; drücken Sie {key} plus C, um ihn zu kopieren.'),
      showLess: 'Weniger anzeigen',
      showFull: 'Den ganzen Prompt anzeigen ({lines} Zeilen)',
    },
    content: {
      'page-title': address(
        'Von der Idee zu deinem ersten GitHub-Projekt · Ein Lernpfad mit der GitHub Copilot-App',
        'Von der Idee zu Ihrem ersten GitHub-Projekt · Ein Lernpfad mit der GitHub Copilot-App'),
      'page-description': address(
        'Ein Lernpfad für den Einstieg mit der GitHub Copilot-App: beschreibe, plane, dokumentiere, entwickle, teste und prüfe dein eigenes kleines Projekt und lade es in deine GitHub-Organisation hoch.',
        'Ein Lernpfad für den Einstieg mit der GitHub Copilot-App: Beschreiben, planen, dokumentieren, entwickeln, testen und prüfen Sie Ihr eigenes kleines Projekt und laden Sie es in Ihre GitHub-Organisation hoch.'),
      'social-description': address(
        'Ein Lernpfad für den Einstieg mit der GitHub Copilot-App. Etwa 90–120 Minuten von der schriftlichen Projektbeschreibung bis zum geprüften Projekt in deiner GitHub-Organisation.',
        'Ein Lernpfad für den Einstieg mit der GitHub Copilot-App. Etwa 90–120 Minuten von der schriftlichen Projektbeschreibung bis zum geprüften Projekt in Ihrer GitHub-Organisation.'),
      'site-title': address('Von der Idee zu deinem ersten GitHub-Projekt', 'Von der Idee zu Ihrem ersten GitHub-Projekt'),
      'short-title': 'Lernpfad',
      'skip-content': 'Zum Inhalt springen',
      'sources-link': 'Quellen und Bildnachweise',
      'steps-label': 'Schritte',
      'guide-navigation': 'Navigation im Leitfaden',
      'steps-navigation': 'Schritte in diesem Leitfaden',
      'progress-storage': address(
        'Dieser Browser speichert deinen Fortschritt nicht. Deine Häkchen werden deshalb beim Neuladen der Seite zurückgesetzt.',
        'Dieser Browser speichert Ihren Fortschritt nicht. Ihre Häkchen werden deshalb beim Neuladen der Seite zurückgesetzt.'),
      'progress-hint': address(
        'Hake den Kontrollpunkt am Ende jedes Schritts ab. Deine Häkchen werden nur in diesem Browser gespeichert.',
        'Haken Sie den Kontrollpunkt am Ende jedes Schritts ab. Ihre Häkchen werden nur in diesem Browser gespeichert.'),
      'overview-label': 'Überblick',
      'before-label': address('Bevor du anfängst', 'Bevor Sie anfangen'),
      'five-words': address('Fünf Begriffe, die du brauchen wirst', 'Fünf Begriffe, die Sie brauchen werden'),
      'nav-step-1': navTitle(1, 'Die App kennenlernen und ein Projekt starten'),
      'nav-step-2': navTitle(2, address('Deine Idee konkretisieren', 'Ihre Idee konkretisieren')),
      'nav-step-3': navTitle(3, 'Den Plan dokumentieren'),
      'nav-step-4': navTitle(4, 'Schrittweise umsetzen'),
      'nav-step-5': navTitle(5, 'Den Code prüfen'),
      'nav-step-6': navTitle(6, address('In deiner Organisation veröffentlichen', 'In Ihrer Organisation veröffentlichen')),
      'nav-step-7': navTitle(7, address('Zeigen, was du gelernt hast', 'Zeigen, was Sie gelernt haben')),
      'start-folder': 'Mit einem leeren lokalen Ordner anfangen',
      'choose-idea': 'Eine kleine Idee auswählen',
      'prepare-brief': address('Deine Projektbeschreibung vorbereiten', 'Ihre Projektbeschreibung vorbereiten'),
      'first-prompt': address('Dein erster Prompt zum Kopieren', 'Ihr erster Prompt zum Kopieren'),
      'now-plan': 'Jetzt den Modus Plan verwenden',
      'stories-matter': 'Warum User Stories und Dokumentation wichtig sind',
      'save-plan': 'Den Plan vor der Umsetzung speichern',
      'review-prompt': 'Prüfprompt zum Kopieren',
      'create-repo': 'Das leere GitHub-Repository erstellen',
      'prepare-upload': 'Copilot den Upload vorbereiten lassen, ohne schon hochzuladen',
      'approve-push': 'Das genaue Ziel und den Push freigeben',
      'verify-upload': 'Prüfen, ob alles angekommen ist',
      'time-10': `${clock}${address('Plane 10 Minuten ein', 'Planen Sie 10 Minuten ein')}`,
      'time-20': `${clock}${address('Plane 20 Minuten ein', 'Planen Sie 20 Minuten ein')}`,
      'time-10-15': `${clock}${address('Plane 10–15 Minuten ein', 'Planen Sie 10–15 Minuten ein')}`,
      'time-25-30': `${clock}${address('Plane 25–30 Minuten ein', 'Planen Sie 25–30 Minuten ein')}`,
      'time-15-20': `${clock}${address('Plane 15–20 Minuten ein', 'Planen Sie 15–20 Minuten ein')}`,
      'plan-mode': 'Modus Plan',
      'interactive-mode': 'Modus Interactive',

      'overview': html`<h1>${address('Von der Idee zu deinem ersten GitHub-Projekt', 'Von der Idee zu Ihrem ersten GitHub-Projekt')}</h1>
<p class="subtitle">Ein Lernpfad für den Einstieg mit der GitHub Copilot-App</p>
<dl class="glance">
<div class="glance-item"><dt>Für wen?</dt><dd>Menschen mit wenig oder keiner Erfahrung in der Softwareentwicklung.</dd></div>
<div class="glance-item"><dt>Zeit</dt><dd>Etwa 90–120 Minuten, nachdem Konto und Software eingerichtet sind.</dd></div>
<div class="glance-item"><dt>${address('Dein Projekt', 'Ihr Projekt')}</dt><dd>Eine eigene kleine Idee, etwa eine einfache App, ein Werkzeug oder ein Skript.</dd></div>
<div class="glance-item"><dt>${address('Dein Ziel', 'Ihr Ziel')}</dt><dd>${address('Ein funktionierendes, dokumentiertes und geprüftes Projekt in deiner GitHub-Organisation.', 'Ein funktionierendes, dokumentiertes und geprüftes Projekt in Ihrer GitHub-Organisation.')}</dd></div>
</dl>
<p class="intro">${address(
  'Du musst keine Programmiersyntax auswendig lernen. Du bringst die Idee mit. Deine Aufgabe ist es, das Ziel zu erklären, Entscheidungen zu treffen, das Ergebnis zu prüfen und zu entscheiden, was geteilt wird. Copilot hilft dir, den Code zu schreiben; für das Ergebnis bleibst du verantwortlich.',
  'Sie müssen keine Programmiersyntax auswendig lernen. Sie bringen die Idee mit. Ihre Aufgabe ist es, das Ziel zu erklären, Entscheidungen zu treffen, das Ergebnis zu prüfen und zu entscheiden, was geteilt wird. Copilot hilft Ihnen, den Code zu schreiben; für das Ergebnis bleiben Sie verantwortlich.')}</p>
<div class="workflow">
<p class="workflow-label" id="workflow-label"><strong>Der Ablauf:</strong></p>
<ol class="workflow-steps" aria-labelledby="workflow-label">
<li><span>Beschreiben</span></li>
<li><svg class="icon workflow-arrow" aria-hidden="true" focusable="false"><use href="#i-arrow"></use></svg><span>Planen</span></li>
<li><svg class="icon workflow-arrow" aria-hidden="true" focusable="false"><use href="#i-arrow"></use></svg><span>Dokumentieren</span></li>
<li><svg class="icon workflow-arrow" aria-hidden="true" focusable="false"><use href="#i-arrow"></use></svg><span>Entwickeln</span></li>
<li><svg class="icon workflow-arrow" aria-hidden="true" focusable="false"><use href="#i-arrow"></use></svg><span>Testen</span></li>
<li><svg class="icon workflow-arrow" aria-hidden="true" focusable="false"><use href="#i-arrow"></use></svg><span>Prüfen</span></li>
<li><svg class="icon workflow-arrow" aria-hidden="true" focusable="false"><use href="#i-arrow"></use></svg><span>Pushen</span></li>
</ol>
</div>`,
      'before': html`<h2 id="before-you-begin-title">${address('Bevor du anfängst', 'Bevor Sie anfangen')}</h2>
<ul>
<li>${address(
  'Installiere die GitHub Copilot-App und melde dich mit deinem persönlichen GitHub-Konto an, das deine Organisation eingeladen hat. Falls du die Einladung noch nicht angenommen hast, suche zuerst die Einladungs-E-Mail von GitHub und nimm sie an. Deine Organisation muss außerdem den Copilot-Zugriff für dich aktivieren.',
  'Installieren Sie die GitHub Copilot-App und melden Sie sich mit Ihrem persönlichen GitHub-Konto an, das Ihre Organisation eingeladen hat. Falls Sie die Einladung noch nicht angenommen haben, suchen Sie zuerst die Einladungs-E-Mail von GitHub und nehmen Sie sie an. Ihre Organisation muss außerdem den Copilot-Zugriff für Sie aktivieren.')}</li>
<li>${address(
  '<strong>Git</strong> muss installiert sein. Dein Projekt kann weitere Werkzeuge benötigen, etwa eine Programmiersprache. Copilot prüft, was bereits installiert ist; verwende diese Werkzeuge oder solche, die deine Kursleitung freigegeben hat. Bitte die Kursleitung um Hilfe bei der Einrichtung. Installiere keine unbekannten Werkzeuge, nur weil ein Agent sie vorschlägt.',
  '<strong>Git</strong> muss installiert sein. Ihr Projekt kann weitere Werkzeuge benötigen, etwa eine Programmiersprache. Copilot prüft, was bereits installiert ist; verwenden Sie diese Werkzeuge oder solche, die Ihre Kursleitung freigegeben hat. Bitten Sie die Kursleitung um Hilfe bei der Einrichtung. Installieren Sie keine unbekannten Werkzeuge, nur weil ein Agent sie vorschlägt.')}</li>
<li>${address(
  'Bring eine Idee für etwas Kleines mit, das du entwickeln möchtest. Sie muss noch nicht vollständig sein; in Schritt 2 arbeitest du sie aus.',
  'Bringen Sie eine Idee für etwas Kleines mit, das Sie entwickeln möchten. Sie muss noch nicht vollständig sein; in Schritt 2 arbeiten Sie sie aus.')}</li>
<li>${address(
  'Kenne den Namen deiner Organisation, die vorgeschriebene Sichtbarkeit des Repositorys und die Regeln für den ersten Push auf den Branch <code>main</code> eines neuen Repositorys.',
  'Informieren Sie sich über den Namen Ihrer Organisation, die vorgeschriebene Sichtbarkeit des Repositorys und die Regeln für den ersten Push auf den Branch <code>main</code> eines neuen Repositorys.')}</li>
<li>${address(
  'Verwende nur erfundene oder nicht sensible Beispieldaten. Füge keine Passwörter, API-Schlüssel, Kundeninformationen oder vertraulichen Dokumente in die Übung ein.',
  'Verwenden Sie nur erfundene oder nicht sensible Beispieldaten. Fügen Sie keine Passwörter, API-Schlüssel, Kundeninformationen oder vertraulichen Dokumente in die Übung ein.')}</li>
</ul>
<h3 id="five-words-you-will-use" data-spy>${address('Fünf Begriffe, die du brauchen wirst', 'Fünf Begriffe, die Sie brauchen werden')}</h3>
<div class="table-wrap"><table class="data-table" role="table">${table(['Begriff', 'Einfach erklärt'], [
  ['Projekt / Repository', address(
    'Dein Projekt ist ein Ordner mit Dateien. Ein Git-Repository zeichnet zusätzlich deren Änderungshistorie auf. Eine Kopie auf GitHub ermöglicht die Zusammenarbeit mit anderen.',
    'Ihr Projekt ist ein Ordner mit Dateien. Ein Git-Repository zeichnet zusätzlich deren Änderungshistorie auf. Eine Kopie auf GitHub ermöglicht die Zusammenarbeit mit anderen.')],
  ['Session', 'Eine Unterhaltung mit Copilot samt Arbeitskontext für eine Aufgabe.'],
  ['Commit', 'Ein benannter Stand ausgewählter Änderungen, der zunächst lokal gespeichert wird.'],
  ['Push', 'Das Hochladen lokaler Commits in ein Repository auf GitHub. Eine Datei zu speichern oder einen Commit zu erstellen, ist noch kein Push.'],
  ['Branch / Pull Request', 'Ein Branch hält einen Arbeitsstand getrennt. Ein Pull Request, kurz PR, bittet andere darum, diese Arbeit zu prüfen und zusammenzuführen.'],
])}</table></div>`,

      'step-1-title': stepTitle(1, 'Die App kennenlernen und ein Projekt starten'),
      'step-1-lead': address(
        'Lerne diese Bedienelemente kennen. Erweiterte Anpassungen und Automatisierungen kannst du vorerst ignorieren.',
        'Lernen Sie diese Bedienelemente kennen. Erweiterte Anpassungen und Automatisierungen können Sie vorerst ignorieren.'),
      'image-1-alt': 'Von GitHub veröffentlichter Screenshot der Copilot-App mit Navigation und Projekt-Sessions.',
      'caption-1': html`Screenshot 1: GitHubs veröffentlichtes Beispiel der App-Navigation. Es verwendet ältere Bezeichnungen, darunter <strong>Sessions</strong> und <strong>Quick chats</strong>. Die aktuelle Dokumentation nennt diese Bereiche <strong>Projects</strong> und <strong>Chats</strong>. Die Screenshots in diesem Leitfaden sind veröffentlichte macOS-Beispiele. Windows-Bedienelemente und neuere Versionen können anders aussehen. ${address('Folge den aktuellen Bezeichnungen in den Anweisungen.', 'Folgen Sie den aktuellen Bezeichnungen in den Anweisungen.')} <a href="#sources">Bildquellen</a>. ${imageLink('01-app-sidebar.png')}`,
      'table-app': table(['Bereich', address('Wofür du ihn heute brauchst', 'Wofür Sie ihn heute brauchen')], [
        ['<strong>Projects</strong> in der Seitenleiste', address('Deinen Projektordner verbinden und zu seiner Session zurückkehren.', 'Ihren Projektordner verbinden und zu seiner Session zurückkehren.')],
        ['Eingabefeld für Prompts', address('Copilot mitteilen, was du möchtest. Hier liest du seine Fragen und Antworten.', 'Copilot mitteilen, was Sie möchten. Hier lesen Sie seine Fragen und Antworten.')],
        ['Modusauswahl unter dem Prompt', 'Vor der Umsetzung <strong>Plan</strong> auswählen, danach <strong>Interactive</strong> für eine kontrollierte Umsetzung.'],
        ['<strong>Changes</strong> oberhalb des Prompts', 'Prüfen, welche Dateien und Zeilen geändert wurden.'],
        ['Browser- / Terminal-Canvas', address('Dein laufendes Projekt oder die Befehle von Copilot sehen. Du kannst Copilot bitten, diese Ansichten zu öffnen.', 'Ihr laufendes Projekt oder die Befehle von Copilot sehen. Sie können Copilot bitten, diese Ansichten zu öffnen.')],
        ['<strong>My work</strong>', 'Später GitHub-Issues und Pull Requests finden.'],
      ]),
      'folder-steps': html`<li>${address(
  html`Erstelle im Dateimanager einen Ordner namens <code><span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span></code>. Ersetze <code><span class="ph">YOUR-PROJECT</span></code> durch einen kurzen Namen für deine Idee, in Kleinbuchstaben mit Bindestrichen, etwa <code>my-first-project</code>, und <code><span class="ph">YOUR-USERNAME</span></code> durch deinen GitHub-Benutzernamen. Unter Windows eignet sich zum Beispiel <code>C:\Users\<span class="ph">YOUR-NAME</span>\Projects\<span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span></code>. Wähle nicht deinen gesamten Benutzerordner, den Downloads-Ordner oder einen Ordner mit anderer Arbeit aus.`,
  html`Erstellen Sie im Dateimanager einen Ordner namens <code><span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span></code>. Ersetzen Sie <code><span class="ph">YOUR-PROJECT</span></code> durch einen kurzen Namen für Ihre Idee, in Kleinbuchstaben mit Bindestrichen, etwa <code>my-first-project</code>, und <code><span class="ph">YOUR-USERNAME</span></code> durch Ihren GitHub-Benutzernamen. Unter Windows eignet sich zum Beispiel <code>C:\Users\<span class="ph">YOUR-NAME</span>\Projects\<span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span></code>. Wählen Sie nicht Ihren gesamten Benutzerordner, den Downloads-Ordner oder einen Ordner mit anderer Arbeit aus.`)}</li>
<li>${address('Klicke in der Seitenleiste der App auf <strong>+</strong> neben <strong>Projects</strong>.', 'Klicken Sie in der Seitenleiste der App auf <strong>+</strong> neben <strong>Projects</strong>.')}</li>
<li>${address('Wähle unter <strong>Add project from</strong> die Option <strong>Local folder or repository</strong> und dann deinen neuen Ordner.', 'Wählen Sie unter <strong>Add project from</strong> die Option <strong>Local folder or repository</strong> und dann Ihren neuen Ordner.')}</li>
<li>${address('Suche unter <strong>Projects</strong> den verbundenen Ordner und klicke daneben auf <strong>+</strong>, um eine Session zu starten.', 'Suchen Sie unter <strong>Projects</strong> den verbundenen Ordner und klicken Sie daneben auf <strong>+</strong>, um eine Session zu starten.')}</li>
<li>${address(
  'Bleibe während dieser ersten Übung in diesem Projekt und dieser Session. Bei einem einfachen Ordner arbeitest du direkt darin. Falls eine Auswahl des Repository-Speicherorts erscheint, wähle für diese Einzelübung <strong>Local repository</strong>, keine Cloud-Session und keinen separaten Worktree.',
  'Bleiben Sie während dieser ersten Übung in diesem Projekt und dieser Session. Bei einem einfachen Ordner arbeiten Sie direkt darin. Falls eine Auswahl des Repository-Speicherorts erscheint, wählen Sie für diese Einzelübung <strong>Local repository</strong>, keine Cloud-Session und keinen separaten Worktree.')}</li>
<li>${address(
  'Lasse das Modell auf <strong>Auto</strong> oder wähle das von deiner Kursleitung empfohlene Modell. Wähle in der Modusauswahl <strong>Plan</strong>. Sende noch keinen Auftrag zur Umsetzung.',
  'Lassen Sie das Modell auf <strong>Auto</strong> oder wählen Sie das von Ihrer Kursleitung empfohlene Modell. Wählen Sie in der Modusauswahl <strong>Plan</strong>. Senden Sie noch keinen Auftrag zur Umsetzung.')}</li>`,
      'image-2-alt': 'GitHub-Screenshot der Speicherortauswahl einer Session mit den Optionen New worktree und Local repository.',
      'caption-2': html`Screenshot 2: Die Speicherortauswahl für ein vorhandenes Git-Repository. Im Screenshot ist <strong>New worktree</strong> ausgewählt; das erstellt eine separate Arbeitskopie. Diese Einstiegsübung verwendet stattdessen <strong>Local repository</strong>, wenn die Auswahl verfügbar ist. Bei einem leeren Ordner ohne Git wird dieses Menü möglicherweise nicht angezeigt. ${imageLink('02-session-location.png')}`,
      'local-start': address(
        '<strong>Warum lokal anfangen?</strong> So kannst du experimentieren, bevor du etwas teilst. Das Verbinden eines lokalen Ordners erstellt <strong>kein</strong> Repository in der Organisation und lädt deine Dateien nicht hoch. Das kommt erst nach der Prüfung.',
        '<strong>Warum lokal anfangen?</strong> So können Sie experimentieren, bevor Sie etwas teilen. Das Verbinden eines lokalen Ordners erstellt <strong>kein</strong> Repository in der Organisation und lädt Ihre Dateien nicht hoch. Das kommt erst nach der Prüfung.'),
      'checkpoint-1': address(
        '<strong>Kontrollpunkt:</strong> Du erkennst das ausgewählte Projekt, seinen Ordner und die Auswahl des Modus <strong>Plan</strong>.',
        '<strong>Kontrollpunkt:</strong> Sie erkennen das ausgewählte Projekt, seinen Ordner und die Auswahl des Modus <strong>Plan</strong>.'),

      'step-2-title': stepTitle(2, address('Deine Idee konkretisieren und vollständig beschreiben', 'Ihre Idee konkretisieren und vollständig beschreiben')),
      'step-2-lead': 'Der Modus Plan ist ein Gespräch über die Arbeit, keine magische Schaltfläche für ein automatisch korrektes Ergebnis.',
      'table-modes': table(['Modus', address('So nutzt du ihn in diesem Lernpfad', 'So nutzen Sie ihn in diesem Lernpfad')], [
        ['<strong>Plan</strong>', address('Anforderungen klären und ein Vorgehen vorschlagen. Prüfe den Plan, bevor du die Umsetzung freigibst.', 'Anforderungen klären und ein Vorgehen vorschlagen. Prüfen Sie den Plan, bevor Sie die Umsetzung freigeben.')],
        ['<strong>Interactive</strong>', 'In kleinen, abgestimmten Schritten entwickeln und Fragen sowie Berechtigungsanfragen beantworten.'],
        ['<strong>Autopilot</strong>', address('Stärker eigenständige Ausführung. Lass diesen Modus in der ersten Übung aus.', 'Stärker eigenständige Ausführung. Lassen Sie diesen Modus in der ersten Übung aus.')],
      ]),
      'interactive-boundaries': address(
        'Der Modus Interactive verspricht nicht, vor jeder Codezeile nachzufragen. Lasse die üblichen Berechtigungsabfragen und Organisationsregeln aktiviert. Aktiviere keine pauschale automatische Freigabe aller Werkzeuge.',
        'Der Modus Interactive verspricht nicht, vor jeder Codezeile nachzufragen. Lassen Sie die üblichen Berechtigungsabfragen und Organisationsregeln aktiviert. Aktivieren Sie keine pauschale automatische Freigabe aller Werkzeuge.'),
      'small-idea': address(
        'Wähle etwas, das du tatsächlich nutzen würdest. Dein erstes Projekt sollte eine Hauptaufgabe für eine bestimmte Art von Person lösen und sich in einem Satz beschreiben lassen.',
        'Wählen Sie etwas, das Sie tatsächlich nutzen würden. Ihr erstes Projekt sollte eine Hauptaufgabe für eine bestimmte Art von Person lösen und sich in einem Satz beschreiben lassen.'),
      'table-scopes': table(['Aspekt', 'Gut für ein erstes Projekt', 'Für später aufheben'], [
        ['Nutzende', address('Du selbst oder eine bestimmte Art von Person wie du.', 'Sie selbst oder eine bestimmte Art von Person wie Sie.'), 'Mehrere Nutzergruppen mit unterschiedlichen Berechtigungen.'],
        ['Umfang', 'Eine Hauptaufgabe mit drei oder vier kleinen Funktionen.', 'Eine lange Funktionsliste oder eine ganze Plattform.'],
        ['Werkzeuge', address('Läuft auf deinem eigenen Computer mit vorhandenen oder freigegebenen Werkzeugen.', 'Läuft auf Ihrem eigenen Computer mit vorhandenen oder freigegebenen Werkzeugen.'), 'Kostenpflichtige Dienste, neue Konten oder Systeme anderer Personen.'],
        ['Daten', 'Erfundene oder nicht sensible Beispiele.', 'Echte Kundendaten, persönliche oder vertrauliche Daten.'],
        ['Prüfung', address('Du kannst es ausprobieren und sehen, ob es funktioniert.', 'Sie können es ausprobieren und sehen, ob es funktioniert.'), 'Schwer überprüfbares Verhalten, etwa KI-Funktionen innerhalb des Projekts.'],
      ]),
      'choose-smallest': address(
        'Wenn du mehrere Ideen hast, wähle die kleinste. Copilot kann dir beim Eingrenzen helfen, aber die Idee und die Entscheidungen bleiben deine.',
        'Wenn Sie mehrere Ideen haben, wählen Sie die kleinste. Copilot kann Ihnen beim Eingrenzen helfen, aber die Idee und die Entscheidungen bleiben Ihre.'),
      'brief-intro': address(
        'Schreibe deinen ersten Prompt in eine Notiz, bevor du ihn sendest. Verwende diese Checkliste, um vermeidbare Unklarheiten auszuräumen:',
        'Schreiben Sie Ihren ersten Prompt in eine Notiz, bevor Sie ihn senden. Verwenden Sie diese Checkliste, um vermeidbare Unklarheiten auszuräumen:'),
      'table-brief': table(['Überlegung', address('Notiere', 'Notieren Sie'), 'Tipp'], [
        ['Problem und Ergebnis', 'Welches Problem lösen wir?', address('Ein oder zwei Sätze in deinen eigenen Worten.', 'Ein oder zwei Sätze in Ihren eigenen Worten.')],
        ['Zielgruppe', 'Wer wird es nutzen?', 'Eine Art von Person reicht für eine erste Version.'],
        ['Wichtigster Ablauf', 'Was wird die Person tatsächlich tun?', address('Schreibe die Schritte auf: Start, Aktion, Ergebnis, nächste Aktion.', 'Schreiben Sie die Schritte auf: Start, Aktion, Ergebnis, nächste Aktion.')],
        ['Umfang der ersten Version', 'Was muss funktionieren? Was ist ausgeschlossen?', address('Drei oder vier kleine Funktionen; benenne, was du weglässt.', 'Drei oder vier kleine Funktionen; benennen Sie, was Sie weglassen.')],
        ['Daten', 'Welche Informationen werden genutzt oder gespeichert, wo und wie sensibel sind sie?', address('Nutze erfundene Beispiele, nichts Persönliches oder Vertrauliches.', 'Nutzen Sie erfundene Beispiele, nichts Persönliches oder Vertrauliches.')],
        ['Rahmenbedingungen', 'Geräte, Technik, Budget, Installationsbeschränkungen?', address('Bevorzuge vorhandene Werkzeuge; keine kostenpflichtigen Dienste.', 'Bevorzugen Sie vorhandene Werkzeuge; keine kostenpflichtigen Dienste.')],
        ['Erfolg', 'Was könnte eine andere Person überprüfen?', 'Etwas Beobachtbares, zum Beispiel: „Meine Einträge sind noch da, wenn ich zurückkomme.“'],
        ['Offene Fragen', 'Was sollte Copilot fragen, statt es anzunehmen?', 'Leere oder ungewöhnliche Eingaben, Grenzfälle und das Verhalten bei Fehlern.'],
      ]),
      'observable-outcomes': address(
        'Vermeide „Baue eine schöne App, die funktioniert“. Bevorzuge beobachtbare Ergebnisse. „Schön“, „einfach“ und „benutzerfreundlich“ sind sinnvolle Absichten, für sich allein aber keine überprüfbaren Anforderungen.',
        'Vermeiden Sie „Bauen Sie eine schöne App, die funktioniert“. Bevorzugen Sie beobachtbare Ergebnisse. „Schön“, „einfach“ und „benutzerfreundlich“ sind sinnvolle Absichten, für sich allein aber keine überprüfbaren Anforderungen.'),
      'first-prompt-intro': address(
        'Kopiere den folgenden Prompt in deine Notiz. Ersetze jeden Teil in [eckigen Klammern] durch deine eigene Idee und nutze dabei deine Antworten aus der Checkliste. Lasse die anderen Abschnitte unverändert: Sie setzen Grenzen und sorgen dafür, dass Copilot dich fragt, statt zu raten.',
        'Kopieren Sie den folgenden Prompt in Ihre Notiz. Ersetzen Sie jeden Teil in [eckigen Klammern] durch Ihre eigene Idee und nutzen Sie dabei Ihre Antworten aus der Checkliste. Lassen Sie die anderen Abschnitte unverändert: Sie setzen Grenzen und sorgen dafür, dass Copilot Sie fragt, statt zu raten.'),
      'prompt-1-title': address('Erster Prompt: deine Idee eintragen', 'Erster Prompt: Ihre Idee eintragen'),
      'prompt-1': address(html`Du bist mein Coach für Softwareentwicklung. Ich fange gerade erst an.
Hilf mir, ein kleines Projekt in verständlicher Sprache zu planen.

MODUS UND GRENZEN
Wir planen, wir setzen noch nichts um.
Du darfst das ausgewählte Projekt ansehen und relevante installierte Werkzeuge prüfen.
Schreibe keinen Projektcode, installiere keine Pakete, erstelle keine Cloud-Ressourcen
und führe keine Commits, Pushes oder Veröffentlichungen durch.
Untersuche keine unbeteiligten Ordner.

MEINE IDEE
Ich möchte <span class="ph-fill">[eine kurze Beschreibung deines Projekts]</span> entwickeln,
für <span class="ph-fill">[wer es nutzen wird]</span>.
Es löst dieses Problem: <span class="ph-fill">[das Problem in einem oder zwei Sätzen]</span>.
Erfolg bedeutet <span class="ph-fill">[was jemand sehen oder prüfen könnte, wenn es funktioniert]</span>.

WICHTIGSTER ABLAUF
<span class="ph-fill">[Erster Schritt]</span> -&gt; <span class="ph-fill">[nächster Schritt]</span> -&gt; <span class="ph-fill">[Ergebnis]</span> -&gt; <span class="ph-fill">[was danach passiert]</span>

UMFANG DER ERSTEN VERSION
1. <span class="ph-fill">[Die wichtigste Aufgabe, einschließlich Regeln oder Grenzen.]</span>
2. <span class="ph-fill">[Die zweite Aufgabe.]</span>
3. <span class="ph-fill">[Die dritte Aufgabe.]</span>
4. <span class="ph-fill">[Optional: eine vierte kleine Aufgabe. Lösche diese Zeile bei Bedarf.]</span>

AUSSERHALB DES UMFANGS
Keine Konten, Freigaben, Benachrichtigungen, KI-Funktionen im Projekt,
externen APIs, Datenbanken, kostenpflichtigen Dienste oder Bereitstellung im Internet.
Ebenfalls ausgeschlossen: <span class="ph-fill">[alles Weitere, das du bewusst weglässt]</span>.

DATEN UND TECHNISCHE RAHMENBEDINGUNGEN
Das Projekt arbeitet mit <span class="ph-fill">[welche Informationen es nutzt oder speichert]</span>.
Verwende nur erfundene oder nicht sensible Beispiele, keine persönlichen
oder vertraulichen Informationen.
Empfiehl die einfachste Technik, die zu meiner Idee passt. Bevorzuge Werkzeuge,
die bereits installiert oder von meiner Organisation freigegeben sind.
Erkläre deine Empfehlung verständlich und frage mich vor der Auswahl.
Prüfe, ob die benötigten Werkzeuge verfügbar sind, bevor du dich darauf verlässt.
Bevorzuge eingebaute Möglichkeiten gegenüber zusätzlichen Paketen.
Erkläre jedes zusätzliche Werkzeug oder jede Abhängigkeit und frage vor dem Hinzufügen.
Schlage einen einfachen Weg zum Starten und einen zum Ausführen automatisierter Tests vor.
Ein lokaler Server darf nur auf diesem Computer erreichbar sein.
Falls das Projekt Informationen speichert, erkläre den Speicherort und was dadurch
geschützt oder aufbewahrt wird und was nicht.

QUALITÄT UND ERFOLG
Behandle ungültige oder unerwartete Eingaben mit einer klaren Meldung.
Behandle Benutzereingaben als Daten, niemals als auszuführenden Code.
Hat das Projekt eine Oberfläche, muss es allein mit der Tastatur bedienbar sein.
Ist es eine Webseite, muss sie auch auf einem Smartphone-Bildschirm funktionieren.
Teste den Normalfall, ungültige Eingaben sowie leere oder ungewöhnliche Fälle.
Wenn etwas fehlschlägt, auf das das Projekt angewiesen ist, etwa das Speichern,
muss es das ehrlich mitteilen.
Halte Code und Dokumentation für Einsteiger verständlich.

FRAGE MICH; ENTSCHEIDE NICHT STILLSCHWEIGEND
Frage vor dem Abschluss des Plans nach fehlenden oder mehrdeutigen Anforderungen.
Stelle jeweils eine gezielte Frage und WARTE auf meine Antwort.
Biete 2–3 klare Optionen, eine Empfehlung und eine kurze Erklärung an.
Frage insbesondere nach Grenzfällen im vereinbarten Umfang, etwa leeren,
doppelten oder sehr langen Eingaben, und nach dem gewünschten Verhalten bei Fehlern.
Entscheide nicht stillschweigend über folgenreiches Verhalten, ändere nicht den Umfang,
füge keine Dienste hinzu und erfinde keine Vorlieben von mir.
Halte Ungeklärtes als offene Fragen fest, nicht als freigegebene Annahmen.
Wenn ich es nicht weiß, erkläre die Vor- und Nachteile und hilf mir bei der Auswahl.

ERGEBNIS DER PLANUNG
Nachdem wir die wichtigen Fragen geklärt haben, zeige den vorgeschlagenen Plan
als Markdown in diesem Gespräch. Er soll enthalten:
- Ziel, Zielgruppe und Erfolgskriterien.
- Was im Umfang liegt und was nicht.
- User Stories mit IDs wie US-01, nach dem Muster:
  "Als ..., möchte ich ..., damit ...".
- Überprüfbare Akzeptanzkriterien je Story nach Gegeben/Wenn/Dann (Given/When/Then).
- Abgestimmte Entscheidungen, Gründe, Annahmen und verbleibende offene Fragen.
- Einen einfachen technischen Ansatz und die vorgeschlagene Dateistruktur.
- Kleine Umsetzungsschritte, jeweils eine User Story.
- Automatisierte und manuelle Prüfungen, die sich auf die Akzeptanzkriterien beziehen.
- Risiken, Grenzen und eine Definition von fertig.

Setze nichts um und markiere den Plan nicht als freigegeben.
Bitte mich, ihn zu prüfen, und warte auf meine ausdrückliche Freigabe.
Beginne mit deiner ersten Rückfrage.`, html`Sie sind mein Coach für Softwareentwicklung. Ich fange gerade erst an.
Helfen Sie mir, ein kleines Projekt in verständlicher Sprache zu planen.

MODUS UND GRENZEN
Wir planen, wir setzen noch nichts um.
Sie dürfen das ausgewählte Projekt ansehen und relevante installierte Werkzeuge prüfen.
Schreiben Sie keinen Projektcode, installieren Sie keine Pakete, erstellen Sie keine Cloud-Ressourcen
und führen Sie keine Commits, Pushes oder Veröffentlichungen durch.
Untersuchen Sie keine unbeteiligten Ordner.

MEINE IDEE
Ich möchte <span class="ph-fill">[eine kurze Beschreibung Ihres Projekts]</span> entwickeln,
für <span class="ph-fill">[wer es nutzen wird]</span>.
Es löst dieses Problem: <span class="ph-fill">[das Problem in einem oder zwei Sätzen]</span>.
Erfolg bedeutet <span class="ph-fill">[was jemand sehen oder prüfen könnte, wenn es funktioniert]</span>.

WICHTIGSTER ABLAUF
<span class="ph-fill">[Erster Schritt]</span> -&gt; <span class="ph-fill">[nächster Schritt]</span> -&gt; <span class="ph-fill">[Ergebnis]</span> -&gt; <span class="ph-fill">[was danach passiert]</span>

UMFANG DER ERSTEN VERSION
1. <span class="ph-fill">[Die wichtigste Aufgabe, einschließlich Regeln oder Grenzen.]</span>
2. <span class="ph-fill">[Die zweite Aufgabe.]</span>
3. <span class="ph-fill">[Die dritte Aufgabe.]</span>
4. <span class="ph-fill">[Optional: eine vierte kleine Aufgabe. Löschen Sie diese Zeile bei Bedarf.]</span>

AUSSERHALB DES UMFANGS
Keine Konten, Freigaben, Benachrichtigungen, KI-Funktionen im Projekt,
externen APIs, Datenbanken, kostenpflichtigen Dienste oder Bereitstellung im Internet.
Ebenfalls ausgeschlossen: <span class="ph-fill">[alles Weitere, das Sie bewusst weglassen]</span>.

DATEN UND TECHNISCHE RAHMENBEDINGUNGEN
Das Projekt arbeitet mit <span class="ph-fill">[welche Informationen es nutzt oder speichert]</span>.
Verwenden Sie nur erfundene oder nicht sensible Beispiele, keine persönlichen
oder vertraulichen Informationen.
Empfehlen Sie die einfachste Technik, die zu meiner Idee passt. Bevorzugen Sie Werkzeuge,
die bereits installiert oder von meiner Organisation freigegeben sind.
Erklären Sie Ihre Empfehlung verständlich und fragen Sie mich vor der Auswahl.
Prüfen Sie, ob die benötigten Werkzeuge verfügbar sind, bevor Sie sich darauf verlassen.
Bevorzugen Sie eingebaute Möglichkeiten gegenüber zusätzlichen Paketen.
Erklären Sie jedes zusätzliche Werkzeug oder jede Abhängigkeit und fragen Sie vor dem Hinzufügen.
Schlagen Sie einen einfachen Weg zum Starten und einen zum Ausführen automatisierter Tests vor.
Ein lokaler Server darf nur auf diesem Computer erreichbar sein.
Falls das Projekt Informationen speichert, erklären Sie den Speicherort und was dadurch
geschützt oder aufbewahrt wird und was nicht.

QUALITÄT UND ERFOLG
Behandeln Sie ungültige oder unerwartete Eingaben mit einer klaren Meldung.
Behandeln Sie Benutzereingaben als Daten, niemals als auszuführenden Code.
Hat das Projekt eine Oberfläche, muss es allein mit der Tastatur bedienbar sein.
Ist es eine Webseite, muss sie auch auf einem Smartphone-Bildschirm funktionieren.
Testen Sie den Normalfall, ungültige Eingaben sowie leere oder ungewöhnliche Fälle.
Wenn etwas fehlschlägt, auf das das Projekt angewiesen ist, etwa das Speichern,
muss es das ehrlich mitteilen.
Halten Sie Code und Dokumentation für Einsteiger verständlich.

FRAGEN SIE MICH; ENTSCHEIDEN SIE NICHT STILLSCHWEIGEND
Fragen Sie vor dem Abschluss des Plans nach fehlenden oder mehrdeutigen Anforderungen.
Stellen Sie jeweils eine gezielte Frage und WARTEN Sie auf meine Antwort.
Bieten Sie 2–3 klare Optionen, eine Empfehlung und eine kurze Erklärung an.
Fragen Sie insbesondere nach Grenzfällen im vereinbarten Umfang, etwa leeren,
doppelten oder sehr langen Eingaben, und nach dem gewünschten Verhalten bei Fehlern.
Entscheiden Sie nicht stillschweigend über folgenreiches Verhalten, ändern Sie nicht den Umfang,
fügen Sie keine Dienste hinzu und erfinden Sie keine Vorlieben von mir.
Halten Sie Ungeklärtes als offene Fragen fest, nicht als freigegebene Annahmen.
Wenn ich es nicht weiß, erklären Sie die Vor- und Nachteile und helfen Sie mir bei der Auswahl.

ERGEBNIS DER PLANUNG
Nachdem wir die wichtigen Fragen geklärt haben, zeigen Sie den vorgeschlagenen Plan
als Markdown in diesem Gespräch. Er soll enthalten:
- Ziel, Zielgruppe und Erfolgskriterien.
- Was im Umfang liegt und was nicht.
- User Stories mit IDs wie US-01, nach dem Muster:
  "Als ..., möchte ich ..., damit ...".
- Überprüfbare Akzeptanzkriterien je Story nach Gegeben/Wenn/Dann (Given/When/Then).
- Abgestimmte Entscheidungen, Gründe, Annahmen und verbleibende offene Fragen.
- Einen einfachen technischen Ansatz und die vorgeschlagene Dateistruktur.
- Kleine Umsetzungsschritte, jeweils eine User Story.
- Automatisierte und manuelle Prüfungen, die sich auf die Akzeptanzkriterien beziehen.
- Risiken, Grenzen und eine Definition von fertig.

Setzen Sie nichts um und markieren Sie den Plan nicht als freigegeben.
Bitten Sie mich, ihn zu prüfen, und warten Sie auf meine ausdrückliche Freigabe.
Beginnen Sie mit Ihrer ersten Rückfrage.`),
      'plan-steps': html`<li>${address('Prüfe, ob das richtige Projekt und <strong>Plan</strong> in der Modusauswahl ausgewählt sind.', 'Prüfen Sie, ob das richtige Projekt und <strong>Plan</strong> in der Modusauswahl ausgewählt sind.')}</li>
<li>${address('Prüfe, ob keine [eckigen Klammern] mehr in deinem Prompt stehen. Füge ihn dann ein und sende ihn.', 'Prüfen Sie, ob keine [eckigen Klammern] mehr in Ihrem Prompt stehen. Fügen Sie ihn dann ein und senden Sie ihn.')}</li>
<li>${address('Beantworte die Fragen. Bitte um eine einfachere Erklärung, wenn dir eine Option unbekannt ist.', 'Beantworten Sie die Fragen. Bitten Sie um eine einfachere Erklärung, wenn Ihnen eine Option unbekannt ist.')}</li>
<li>${address(
  'Lies den vorgeschlagenen Plan. Prüfe, ob er deiner Idee entspricht, klein bleibt und keine unerklärte Technik oder erfundenen Entscheidungen enthält.',
  'Lesen Sie den vorgeschlagenen Plan. Prüfen Sie, ob er Ihrer Idee entspricht, klein bleibt und keine unerklärte Technik oder erfundenen Entscheidungen enthält.')}</li>
<li>${address(
  'Bitte vor der Freigabe um Änderungen. Eine hilfreiche Antwort ist: „Lass Konten außerhalb des Umfangs. Ersetze ‚einfach zu bedienen‘ durch etwas, das ich selbst prüfen kann. Frage mich nach dem offenen Punkt, statt für mich zu entscheiden.“',
  'Bitten Sie vor der Freigabe um Änderungen. Eine hilfreiche Antwort ist: „Lassen Sie Konten außerhalb des Umfangs. Ersetzen Sie ‚einfach zu bedienen‘ durch etwas, das ich selbst prüfen kann. Fragen Sie mich nach dem offenen Punkt, statt für mich zu entscheiden.“')}</li>`,
      'if-guessing-intro': address('Wenn Copilot anfängt zu raten, sage:', 'Wenn Copilot anfängt zu raten, sagen Sie:'),
      'prompt-2-title': 'Wenn Copilot anfängt zu raten',
      'prompt-2': address(html`Pause. Diese Entscheidung war nicht abgestimmt.
Erkläre die Optionen verständlich, bitte mich um eine Auswahl und warte.
Aktualisiere den Plan nach meiner Antwort. Setze noch nichts um.`, html`Pause. Diese Entscheidung war nicht abgestimmt.
Erklären Sie die Optionen verständlich, bitten Sie mich um eine Auswahl und warten Sie.
Aktualisieren Sie den Plan nach meiner Antwort. Setzen Sie noch nichts um.`),
      'checkpoint-2': address(
        '<strong>Kontrollpunkt:</strong> Du kannst erklären, was entwickelt wird, was nicht, wie du es prüfen wirst und welche Entscheidungen du getroffen hast.',
        '<strong>Kontrollpunkt:</strong> Sie können erklären, was entwickelt wird, was nicht, wie Sie es prüfen werden und welche Entscheidungen Sie getroffen haben.'),

      'step-3-title': stepTitle(3, 'Den abgestimmten Plan als Projektdokumentation festhalten'),
      'step-3-lead': 'Ein Chat ist ein Arbeitsgespräch. Die dauerhafte Vereinbarung gehört ins Repository.',
      'story-intro': 'Eine <strong>User Story</strong> beschreibt den Nutzen für eine Person statt nur eine technische Aufgabe. Sie folgt einem einfachen Muster: „Als [Art von Nutzer], möchte ich [Fähigkeit], damit [Nutzen].“ Zum Beispiel:',
      'story-example': 'Als Nutzer möchte ich, dass meine Einträge noch da sind, wenn ich zurückkomme, damit ich dort weitermachen kann, wo ich aufgehört habe.',
      'criteria-intro': 'Ein <strong>Akzeptanzkriterium</strong> macht diese Story überprüfbar:',
      'criteria-example': 'Gegeben, ich habe einen Eintrag gespeichert: Wenn ich das Projekt schließe und erneut öffne, dann ist der Eintrag noch da.',
      'implementation-not-benefit': '„In einer Datei speichern“ ist eine technische Entscheidung, nicht der Nutzen für die Person. „Speichern zuverlässig machen“ ist zu ungenau, um zu erkennen, ob die Story fertig ist.',
      'documentation-value': address(
        'Klare Dokumentation hilft anderen, das Projekt zu verstehen, dir beim Wiedereinstieg nächste Woche und Copilot mit wiederverwendbarem Kontext. Sie verhindert, dass Prüfungen zu Streit darüber werden, was gemeint war. <strong>Aktualisiere die Dokumentation, wenn sich eine abgestimmte Anforderung ändert. Ändere nicht stillschweigend das Ziel, damit es zum unfertigen Code passt.</strong>',
        'Klare Dokumentation hilft anderen, das Projekt zu verstehen, Ihnen beim Wiedereinstieg nächste Woche und Copilot mit wiederverwendbarem Kontext. Sie verhindert, dass Prüfungen zu Streit darüber werden, was gemeint war. <strong>Aktualisieren Sie die Dokumentation, wenn sich eine abgestimmte Anforderung ändert. Ändern Sie nicht stillschweigend das Ziel, damit es zum unfertigen Code passt.</strong>'),
      'table-files': table([address('Datei in deinem Projekt', 'Datei in Ihrem Projekt'), 'Zweck'], [
        ['<code>README.md</code>', 'Was das Projekt tut, wie man es startet und testet und welche Grenzen es hat.'],
        [html`<code>docs\PLAN.md</code>`, 'Das abgestimmte Ziel, der Umfang, User Stories, Akzeptanzkriterien, Entscheidungen und die Reihenfolge der Umsetzung.'],
        [html`<code>docs\TEST-RESULTS.md</code>`, 'Was tatsächlich geprüft wurde, die Ergebnisse und was noch ungetestet ist.'],
        [html`<code>docs\REVIEW.md</code>`, 'Prüfbefunde und was behoben oder bewusst zurückgestellt wurde.'],
      ]),
      'paths': html`Hier bedeutet <code>docs\PLAN.md</code> eine Datei namens <code>PLAN.md</code> im Ordner <code>docs</code>. Die Beispiele verwenden Windows-Pfade. ${address('Bitte Copilot unter macOS oder Linux, die entsprechenden Pfade für dein Betriebssystem zu verwenden.', 'Bitten Sie Copilot unter macOS oder Linux, die entsprechenden Pfade für Ihr Betriebssystem zu verwenden.')}`,
      'markdown': 'Markdown ist einfacher Text mit leichter Formatierung: <code>#</code> erstellt eine Überschrift, <code>-</code> einen Aufzählungspunkt und <code>- [ ]</code> ein Kontrollkästchen. GitHub stellt <code>.md</code>-Dateien als lesbare Seiten dar.',
      'before-docs': address(
        'Bitte zuerst um das endgültige Markdown im Gespräch. Wechsle dann zu <strong>Interactive</strong> und sende den folgenden Auftrag, der nur die Dokumentation betrifft.',
        'Bitten Sie zuerst um das endgültige Markdown im Gespräch. Wechseln Sie dann zu <strong>Interactive</strong> und senden Sie den folgenden Auftrag, der nur die Dokumentation betrifft.'),
      'docs-only-warning': address(
        '<strong>Gib nicht die gesamte Umsetzung frei, nur um den Plan zu speichern.</strong> Wenn die App auf eine Planfreigabe wartet, bitte Copilot vor der Freigabe, den nächsten Schritt auf die Dokumentation zu begrenzen. Ein appinterner Plan oder eine Chatnachricht ersetzt nicht die Datei in deinem Projekt.',
        '<strong>Geben Sie nicht die gesamte Umsetzung frei, nur um den Plan zu speichern.</strong> Wenn die App auf eine Planfreigabe wartet, bitten Sie Copilot vor der Freigabe, den nächsten Schritt auf die Dokumentation zu begrenzen. Ein appinterner Plan oder eine Chatnachricht ersetzt nicht die Datei in Ihrem Projekt.'),
      'prompt-3-title': 'Auftrag nur für die Dokumentation',
      'prompt-3': address(html`Ich gebe nur die Erstellung der Dokumentation frei, nicht den Projektcode.

Speichere unseren abgestimmten Plan als docs\PLAN.md in diesem Projekt.
Nimm User Stories, Akzeptanzkriterien, Entscheidungen und ihre Gründe,
die Teststrategie und die Definition von fertig auf.
Bewahre verbleibende offene Fragen.
Kennzeichne ungeklärte Entscheidungen nicht als freigegeben.

Erstelle eine kurze README.md mit Zweck, Umfang und einem Link zum Plan.
Falls das Projekt noch nicht läuft, sage das ausdrücklich.
Erfinde keine funktionierenden Einrichtungs- oder Testbefehle.

Zeige mir die tatsächlichen Dateipfade und öffne das Markdown zum Lesen.
Höre nach diesen Dokumentationsänderungen auf.
Installiere nichts, setze nichts um und führe keine Commits oder Pushes durch.`, html`Ich gebe nur die Erstellung der Dokumentation frei, nicht den Projektcode.

Speichern Sie unseren abgestimmten Plan als docs\PLAN.md in diesem Projekt.
Nehmen Sie User Stories, Akzeptanzkriterien, Entscheidungen und ihre Gründe,
die Teststrategie und die Definition von fertig auf.
Bewahren Sie verbleibende offene Fragen.
Kennzeichnen Sie ungeklärte Entscheidungen nicht als freigegeben.

Erstellen Sie eine kurze README.md mit Zweck, Umfang und einem Link zum Plan.
Falls das Projekt noch nicht läuft, sagen Sie das ausdrücklich.
Erfinden Sie keine funktionierenden Einrichtungs- oder Testbefehle.

Zeigen Sie mir die tatsächlichen Dateipfade und öffnen Sie das Markdown zum Lesen.
Hören Sie nach diesen Dokumentationsänderungen auf.
Installieren Sie nichts, setzen Sie nichts um und führen Sie keine Commits oder Pushes durch.`),
      'templates-intro': html`${address('Prüfe', 'Prüfen Sie')} die Struktur mit der <a href="https://github.com/Tajaly/prompt-to-prototype-learning-path/blob/master/templates/PLAN-TEMPLATE.md">wiederverwendbaren Planvorlage</a>. Der <a href="https://github.com/Tajaly/prompt-to-prototype-learning-path/blob/master/examples/PLAN-learning-tracker.md">Beispielplan</a> zeigt, wie konkret ein guter Plan sein kann. Er beschreibt die Idee einer anderen Person, einen kleinen Learning Tracker. ${address(
  'Vergleiche deshalb die Detailtiefe, nicht den Inhalt. Dein Plan beschreibt deine eigene Idee, und die Entscheidungen darin sind deine.',
  'Vergleichen Sie deshalb die Detailtiefe, nicht den Inhalt. Ihr Plan beschreibt Ihre eigene Idee, und die Entscheidungen darin sind Ihre.')}`,
      'read-docs': address(
        html`Lies die gespeicherten Dateien und korrigiere sie bei Bedarf. Bitte Copilot in einer späteren Session ausdrücklich, <code>README.md</code> und <code>docs\PLAN.md</code> zu lesen, oder hänge sie mit <code>@</code> an. Gehe nicht davon aus, dass jedes Projektdokument automatisch einbezogen wird.`,
        html`Lesen Sie die gespeicherten Dateien und korrigieren Sie sie bei Bedarf. Bitten Sie Copilot in einer späteren Session ausdrücklich, <code>README.md</code> und <code>docs\PLAN.md</code> zu lesen, oder hängen Sie sie mit <code>@</code> an. Gehen Sie nicht davon aus, dass jedes Projektdokument automatisch einbezogen wird.`),
      'checkpoint-3': address(
        '<strong>Kontrollpunkt:</strong> Der Plan liegt als lesbare <code>.md</code>-Datei in deinem Projekt, und du stimmst seinen Stories und Akzeptanzkriterien zu.',
        '<strong>Kontrollpunkt:</strong> Der Plan liegt als lesbare <code>.md</code>-Datei in Ihrem Projekt, und Sie stimmen seinen Stories und Akzeptanzkriterien zu.'),

      'step-4-title': stepTitle(4, 'Einen kleinen, freigegebenen Schritt nach dem anderen umsetzen'),
      'step-4-lead': address('Bleibe im Modus <strong>Interactive</strong>.', 'Bleiben Sie im Modus <strong>Interactive</strong>.'),
      'prompt-4-title': 'Die Einrichtung und US-01 umsetzen',
      'prompt-4': address(html`Lies README.md und docs\PLAN.md.
Prüfe, ob offene Entscheidungen die Umsetzung blockieren.
Falls ja, frage mich zuerst.

Ich gebe nur die abgestimmte minimale Projekteinrichtung und US-01 frei.
Setze diese Story und ihre Akzeptanzkriterien mit gezielten Tests um.
Verwende die freigegebenen Werkzeuge. Führe keine neuen Abhängigkeiten ein,
ohne den Grund zu erklären und meine Freigabe einzuholen.

Erkläre die geänderten Dateien in einer für Einsteiger verständlichen Sprache.
Zeige mir mit genauen Schritten, wie ich das Projekt starte und selbst ausprobiere.
Erkläre auch, wie ich es beende. Falls ein lokaler Server läuft, nenne
seine genaue lokale Adresse und mache ihn nur auf diesem Computer erreichbar.
Führe die passenden Prüfungen aus und berichte die tatsächlichen Befehle und Ergebnisse.
Sage ausdrücklich, wenn etwas nicht geprüft werden konnte.

Aktualisiere README.md mit den überprüften Start- und Testanweisungen.
Erstelle oder aktualisiere docs\TEST-RESULTS.md mit Prüfungen und Ergebnissen.
Markiere eine Story nicht als fertig, nur weil Code erzeugt wurde.
Warte auf mein Feedback, bevor du mit der nächsten Story anfängst.
Führe keine Commits, Pushes oder Bereitstellungen durch und füge keine Extras hinzu.`, html`Lesen Sie README.md und docs\PLAN.md.
Prüfen Sie, ob offene Entscheidungen die Umsetzung blockieren.
Falls ja, fragen Sie mich zuerst.

Ich gebe nur die abgestimmte minimale Projekteinrichtung und US-01 frei.
Setzen Sie diese Story und ihre Akzeptanzkriterien mit gezielten Tests um.
Verwenden Sie die freigegebenen Werkzeuge. Führen Sie keine neuen Abhängigkeiten ein,
ohne den Grund zu erklären und meine Freigabe einzuholen.

Erklären Sie die geänderten Dateien in einer für Einsteiger verständlichen Sprache.
Zeigen Sie mir mit genauen Schritten, wie ich das Projekt starte und selbst ausprobiere.
Erklären Sie auch, wie ich es beende. Falls ein lokaler Server läuft, nennen Sie
seine genaue lokale Adresse und machen Sie ihn nur auf diesem Computer erreichbar.
Führen Sie die passenden Prüfungen aus und berichten Sie die tatsächlichen Befehle und Ergebnisse.
Sagen Sie ausdrücklich, wenn etwas nicht geprüft werden konnte.

Aktualisieren Sie README.md mit den überprüften Start- und Testanweisungen.
Erstellen oder aktualisieren Sie docs\TEST-RESULTS.md mit Prüfungen und Ergebnissen.
Markieren Sie eine Story nicht als fertig, nur weil Code erzeugt wurde.
Warten Sie auf mein Feedback, bevor Sie mit der nächsten Story anfangen.
Führen Sie keine Commits, Pushes oder Bereitstellungen durch und fügen Sie keine Extras hinzu.`),
      'try-story': address(
        'Starte oder öffne das Projekt selbst. Probiere aus, was US-01 verspricht, und danach etwas, das es ablehnen oder behandeln sollte, etwa eine leere Eingabe. Prüfe, ob das Verhalten zum Plan passt.',
        'Starten oder öffnen Sie das Projekt selbst. Probieren Sie aus, was US-01 verspricht, und danach etwas, das es ablehnen oder behandeln sollte, etwa eine leere Eingabe. Prüfen Sie, ob das Verhalten zum Plan passt.'),
      'bug-report-intro': address(
        'Falls nicht, melde die <strong>Schritte, das erwartete Ergebnis und das tatsächliche Ergebnis</strong>. Ersetze die Klammern durch deine Beobachtungen:',
        'Falls nicht, melden Sie die <strong>Schritte, das erwartete Ergebnis und das tatsächliche Ergebnis</strong>. Ersetzen Sie die Klammern durch Ihre Beobachtungen:'),
      'prompt-5-title': address('Problemmeldung: deine Beobachtungen eintragen', 'Problemmeldung: Ihre Beobachtungen eintragen'),
      'prompt-5': address(html`Bei US-01 habe ich <span class="ph-fill">[was du Schritt für Schritt getan hast]</span>.
Erwartet: <span class="ph-fill">[was laut Plan passieren sollte]</span>.
Tatsächlich: <span class="ph-fill">[was stattdessen passiert ist]</span>.
Bitte behebe das im vereinbarten Umfang und ergänze einen Regressionstest.
Erkläre die Änderung und wiederhole die relevanten Prüfungen.`, html`Bei US-01 habe ich <span class="ph-fill">[was Sie Schritt für Schritt getan haben]</span>.
Erwartet: <span class="ph-fill">[was laut Plan passieren sollte]</span>.
Tatsächlich: <span class="ph-fill">[was stattdessen passiert ist]</span>.
Bitte beheben Sie das im vereinbarten Umfang und ergänzen Sie einen Regressionstest.
Erklären Sie die Änderung und wiederholen Sie die relevanten Prüfungen.`),
      'next-story': address(
        'Wenn du zufrieden bist, gib die nächste Story mit ihrer ID frei, etwa US-02. Wiederhole das, bis jede Story in deinem Plan fertig ist. Eine Richtungsänderung gehört zuerst in den Plan, bevor daraus Code wird.',
        'Wenn Sie zufrieden sind, geben Sie die nächste Story mit ihrer ID frei, etwa US-02. Wiederholen Sie das, bis jede Story in Ihrem Plan fertig ist. Eine Richtungsänderung gehört zuerst in den Plan, bevor daraus Code wird.'),
      'acceptance-intro': address('<strong>Führe die abschließenden Abnahmeprüfungen auch selbst durch:</strong>', '<strong>Führen Sie die abschließenden Abnahmeprüfungen auch selbst durch:</strong>'),
      'acceptance-checks': html`<li>${address('Probiere den normalen Ablauf jeder Story in deinem Plan aus.', 'Probieren Sie den normalen Ablauf jeder Story in Ihrem Plan aus.')}</li>
<li>${address(
  'Teste ungültige oder ungewöhnliche Eingaben, etwa leere, sehr lange oder unerwartete Werte, und prüfe, ob das Projekt verständlich reagiert.',
  'Testen Sie ungültige oder ungewöhnliche Eingaben, etwa leere, sehr lange oder unerwartete Werte, und prüfen Sie, ob das Projekt verständlich reagiert.')}</li>
<li>${address(
  'Wenn das Projekt etwas speichert, schließe es und öffne es erneut. Prüfe, ob die gespeicherten Informationen noch da sind. Lade bei einer Webseite <strong>dieselbe lokale Adresse</strong> einschließlich Port neu.',
  'Wenn das Projekt etwas speichert, schließen Sie es und öffnen Sie es erneut. Prüfen Sie, ob die gespeicherten Informationen noch da sind. Laden Sie bei einer Webseite <strong>dieselbe lokale Adresse</strong> einschließlich Port neu.')}</li>
<li>${address('Probiere den Start ohne Daten sowie weitere Grenzfälle aus deinem Plan aus.', 'Probieren Sie den Start ohne Daten sowie weitere Grenzfälle aus Ihrem Plan aus.')}</li>
<li>${address(
  'Hat das Projekt eine Oberfläche, durchlaufe den wichtigsten Ablauf nur mit der Tastatur. Prüfe eine Webseite außerdem in einem schmalen Fenster in Smartphone-Größe.',
  'Hat das Projekt eine Oberfläche, durchlaufen Sie den wichtigsten Ablauf nur mit der Tastatur. Prüfen Sie eine Webseite außerdem in einem schmalen Fenster in Smartphone-Größe.')}</li>`,
      'not-run': address(
        'Bitte Copilot um Hilfe bei weniger vertrauten Fällen, etwa einem fehlgeschlagenen Speichervorgang. Halte nicht durchgeführte Prüfungen als <strong>Nicht ausgeführt</strong> fest, niemals als bestanden.',
        'Bitten Sie Copilot um Hilfe bei weniger vertrauten Fällen, etwa einem fehlgeschlagenen Speichervorgang. Halten Sie nicht durchgeführte Prüfungen als <strong>Nicht ausgeführt</strong> fest, niemals als bestanden.'),
      'checkpoint-4': '<strong>Kontrollpunkt:</strong> Alle abgestimmten Stories verhalten sich wie beschrieben. Die README enthält funktionierende Anweisungen, und Testergebnisse sind ehrlich dokumentiert.',

      'step-5-title': stepTitle(5, 'Copilot den Code prüfen lassen und die Befunde bearbeiten'),
      'step-5-lead': 'Die Umsetzung ist nicht die letzte Qualitätsprüfung. Die Codeprüfung ist ein eigener Durchgang, um Fehler, fehlende Anforderungen und vermeidbare Komplexität zu finden.',
      'image-3-alt': 'GitHub-Screenshot der Ansicht Changes mit geänderten Dateien sowie hinzugefügten und entfernten Zeilen.',
      'caption-3': html`Screenshot 3: <strong>Changes</strong> zeigt einen Diff, also die Unterschiede zwischen Dateiständen. Grüne oder mit <code>+</code> markierte Zeilen wurden hinzugefügt; rote oder mit <code>-</code> markierte Zeilen wurden entfernt. ${address(
  'Das ist ein Beispielprojekt, nicht deins. Du musst nicht sofort jede Zeile verstehen: Bitte Copilot, den Zweck jeder geänderten Datei zu erklären.',
  'Das ist ein Beispielprojekt, nicht Ihres. Sie müssen nicht sofort jede Zeile verstehen: Bitten Sie Copilot, den Zweck jeder geänderten Datei zu erklären.')} ${imageLink('03-code-changes.png')}`,
      'open-changes': address(
        'Öffne <strong>Changes</strong> oberhalb des Eingabefelds. Wenn ein einfacher Ordner noch keinen Git-Diff bietet, bitte Copilot, die Projektdateien direkt aufzulisten und zu prüfen. „Kein Diff“ bedeutet nicht „nichts zu prüfen“.',
        'Öffnen Sie <strong>Changes</strong> oberhalb des Eingabefelds. Wenn ein einfacher Ordner noch keinen Git-Diff bietet, bitten Sie Copilot, die Projektdateien direkt aufzulisten und zu prüfen. „Kein Diff“ bedeutet nicht „nichts zu prüfen“.'),
      'prompt-6-title': 'Nur prüfen, noch nichts ändern',
      'prompt-6': address(html`Führe einen reinen Prüfdurchgang für dieses Projekt durch.
Ändere keine Projektdateien und behebe noch keine Befunde.

Lies README.md, docs\PLAN.md sowie die aktuelle Implementierung und die Tests.
Prüfe das ganze kleine Projekt einschließlich neuer oder noch nicht von Git
erfasster Dateien, nicht nur einen vorhandenen Git-Diff.

Prüfe:
- Jede User Story und jedes Akzeptanzkriterium einschließlich Grenzfällen.
- Eingabevalidierung, sichere Behandlung eingegebener Daten und Fehlerbehandlung,
  etwa bei fehlgeschlagenem Speichern.
- Falls das Projekt eine Oberfläche hat: Tastaturbedienung, Beschriftungen,
  sichtbaren Fokus und kleine Bildschirme.
- Fehlende oder irreführende Tests.
- Unnötige Komplexität, Abhängigkeiten oder Funktionen außerhalb des Plans.
- Versehentlich enthaltene Geheimnisse, private Daten oder erzeugte Dateien.
- Ob die Dokumentation zum tatsächlichen Projekt passt.

Führe vorhandene relevante, nicht destruktive Prüfungen aus, soweit möglich.
Gib jedem Befund eine ID und Priorität. Nenne bei Bedarf Datei und Zeile,
was schiefgehen kann, wie es sich reproduzieren lässt und die kleinste empfohlene Lösung.
Gib keine geheimen Werte aus, falls du welche findest.

Ordne jedem Akzeptanzkriterium einen Nachweis zu oder markiere es als ungeprüft.
Trenne bestätigte Probleme von Vorschlägen und Unsicherheiten.
Sage genau, was du nicht untersucht oder getestet hast.
Erkläre die Ergebnisse für Einsteiger und warte auf meine Entscheidung.`, html`Führen Sie einen reinen Prüfdurchgang für dieses Projekt durch.
Ändern Sie keine Projektdateien und beheben Sie noch keine Befunde.

Lesen Sie README.md, docs\PLAN.md sowie die aktuelle Implementierung und die Tests.
Prüfen Sie das ganze kleine Projekt einschließlich neuer oder noch nicht von Git
erfasster Dateien, nicht nur einen vorhandenen Git-Diff.

Prüfen Sie:
- Jede User Story und jedes Akzeptanzkriterium einschließlich Grenzfällen.
- Eingabevalidierung, sichere Behandlung eingegebener Daten und Fehlerbehandlung,
  etwa bei fehlgeschlagenem Speichern.
- Falls das Projekt eine Oberfläche hat: Tastaturbedienung, Beschriftungen,
  sichtbaren Fokus und kleine Bildschirme.
- Fehlende oder irreführende Tests.
- Unnötige Komplexität, Abhängigkeiten oder Funktionen außerhalb des Plans.
- Versehentlich enthaltene Geheimnisse, private Daten oder erzeugte Dateien.
- Ob die Dokumentation zum tatsächlichen Projekt passt.

Führen Sie vorhandene relevante, nicht destruktive Prüfungen aus, soweit möglich.
Geben Sie jedem Befund eine ID und Priorität. Nennen Sie bei Bedarf Datei und Zeile,
was schiefgehen kann, wie es sich reproduzieren lässt und die kleinste empfohlene Lösung.
Geben Sie keine geheimen Werte aus, falls Sie welche finden.

Ordnen Sie jedem Akzeptanzkriterium einen Nachweis zu oder markieren Sie es als ungeprüft.
Trennen Sie bestätigte Probleme von Vorschlägen und Unsicherheiten.
Sagen Sie genau, was Sie nicht untersucht oder getestet haben.
Erklären Sie die Ergebnisse für Einsteiger und warten Sie auf meine Entscheidung.`),
      'slash-review': 'Die App unterstützt außerdem <strong><code>/review</code></strong> für die Änderungen einer aktiven Session. Der vollständige Prompt oben ist bei einem ersten Projekt hilfreich, weil er ausdrücklich neue Dateien einbezieht und den abgestimmten Plan prüft, nicht nur den Diff.',
      'fix-findings-intro': address(
        'Entscheide, welche Befunde behoben werden sollen. Zum Beispiel so, nachdem du die IDs durch die tatsächlichen ersetzt hast:',
        'Entscheiden Sie, welche Befunde behoben werden sollen. Zum Beispiel so, nachdem Sie die IDs durch die tatsächlichen ersetzt haben:'),
      'prompt-7-title': 'Beispiel: ausgewählte Befunde beheben',
      'prompt-7': address(html`Behebe nur die Befunde R1 und R2 und bleibe innerhalb des freigegebenen Plans.
Ergänze oder aktualisiere gezielte Tests, wiederhole die betroffenen Prüfungen
und prüfe die Korrekturen erneut. Berichte verbleibende Unsicherheiten.

Speichere die Befunde und ihren endgültigen Status in docs\REVIEW.md.
Aktualisiere docs\TEST-RESULTS.md mit den tatsächlichen Ergebnissen.
Dokumentiere zurückgestellte Befunde samt Grund, statt sie zu verschweigen.
Führe noch keine Commits, Pushes oder Veröffentlichungen durch.`, html`Beheben Sie nur die Befunde R1 und R2 und bleiben Sie innerhalb des freigegebenen Plans.
Ergänzen oder aktualisieren Sie gezielte Tests, wiederholen Sie die betroffenen Prüfungen
und prüfen Sie die Korrekturen erneut. Berichten Sie verbleibende Unsicherheiten.

Speichern Sie die Befunde und ihren endgültigen Status in docs\REVIEW.md.
Aktualisieren Sie docs\TEST-RESULTS.md mit den tatsächlichen Ergebnissen.
Dokumentieren Sie zurückgestellte Befunde samt Grund, statt sie zu verschweigen.
Führen Sie noch keine Commits, Pushes oder Veröffentlichungen durch.`),
      'review-limits': address(
        'Halte auch ohne Befunde den Prüfumfang, die Prüfungen und ihre Grenzen fest. Eine KI-Prüfung ist hilfreiches Feedback, kein Beweis für Sicherheit oder Korrektheit. Bitte eine andere Person oder die Kursleitung um eine Prüfung, wenn du einen Befund nicht einordnen kannst. Kümmere dich vor dem Veröffentlichen um offengelegte Zugangsdaten. Ein Geheimnis nur aus der neuesten Datei zu entfernen, reicht nicht, wenn es bereits in der Git-Historie steht.',
        'Halten Sie auch ohne Befunde den Prüfumfang, die Prüfungen und ihre Grenzen fest. Eine KI-Prüfung ist hilfreiches Feedback, kein Beweis für Sicherheit oder Korrektheit. Bitten Sie eine andere Person oder die Kursleitung um eine Prüfung, wenn Sie einen Befund nicht einordnen können. Kümmern Sie sich vor dem Veröffentlichen um offengelegte Zugangsdaten. Ein Geheimnis nur aus der neuesten Datei zu entfernen, reicht nicht, wenn es bereits in der Git-Historie steht.'),
      'checkpoint-5': address(
        '<strong>Kontrollpunkt:</strong> Die Prüfung ist dokumentiert, blockierende Befunde sind behoben und erneut geprüft, und du kennst die verbleibenden Grenzen.',
        '<strong>Kontrollpunkt:</strong> Die Prüfung ist dokumentiert, blockierende Befunde sind behoben und erneut geprüft, und Sie kennen die verbleibenden Grenzen.'),

      'step-6-title': stepTitle(6, address('Das geprüfte Projekt in deiner Organisation veröffentlichen', 'Das geprüfte Projekt in Ihrer Organisation veröffentlichen')),
      'step-6-lead': address(
        'Du lädst Quellcode und Dokumentation hoch. <strong>Du stellst keine öffentliche Webseite bereit.</strong>',
        'Sie laden Quellcode und Dokumentation hoch. <strong>Sie stellen keine öffentliche Webseite bereit.</strong>'),
      'create-repo-steps': html`<li>${address(
  'Melde dich im Browser bei GitHub mit deinem persönlichen Konto an, das zur Organisation eingeladen wurde.',
  'Melden Sie sich im Browser bei GitHub mit Ihrem persönlichen Konto an, das zur Organisation eingeladen wurde.')}</li>
<li>${address('Öffne', 'Öffnen Sie')} ${externalLink('https://github.com/new', 'Neues Repository erstellen')}.</li>
<li>${address(
  'Wähle unter <strong>Owner</strong> die Organisation <strong><span class="ph">YOUR-ORG</span></strong>, nicht deinen persönlichen Benutzernamen. Fehlt die Organisation, hast du ihre Einladung vielleicht noch nicht angenommen. Suche die Einladungs-E-Mail von GitHub. Fehlt sie weiterhin, halte an und frage die Kursleitung nach deiner Mitgliedschaft oder deinen Berechtigungen.',
  'Wählen Sie unter <strong>Owner</strong> die Organisation <strong><span class="ph">YOUR-ORG</span></strong>, nicht Ihren persönlichen Benutzernamen. Fehlt die Organisation, haben Sie ihre Einladung vielleicht noch nicht angenommen. Suchen Sie die Einladungs-E-Mail von GitHub. Fehlt sie weiterhin, halten Sie an und fragen Sie die Kursleitung nach Ihrer Mitgliedschaft oder Ihren Berechtigungen.')}</li>
<li>${address(
  'Verwende einen eindeutigen Repository-Namen, etwa <code><span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span></code>, und ergänze eine kurze Beschreibung.',
  'Verwenden Sie einen eindeutigen Repository-Namen, etwa <code><span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span></code>, und ergänzen Sie eine kurze Beschreibung.')}</li>
<li>${address(
  'Wähle <strong>Private</strong>, sofern die Kursleitung nicht ausdrücklich eine andere, von der Organisation genehmigte Sichtbarkeit vorgegeben hat. Wähle nicht einfach Public, nur um das Teilen zu erleichtern.',
  'Wählen Sie <strong>Private</strong>, sofern die Kursleitung nicht ausdrücklich eine andere, von der Organisation genehmigte Sichtbarkeit vorgegeben hat. Wählen Sie nicht einfach Public, nur um das Teilen zu erleichtern.')}</li>
<li>${address(
  'Da du bereits lokale Dateien hast, lasse <strong>Add a README</strong>, <strong>Add .gitignore</strong> und <strong>Choose a license</strong> abgewählt. Wähle keine Vorlage und bitte keinen Cloud-Agenten, das Repository zu füllen.',
  'Da Sie bereits lokale Dateien haben, lassen Sie <strong>Add a README</strong>, <strong>Add .gitignore</strong> und <strong>Choose a license</strong> abgewählt. Wählen Sie keine Vorlage und bitten Sie keinen Cloud-Agenten, das Repository zu füllen.')}</li>
<li>${address('Prüfe Eigentümer, Name und Sichtbarkeit erneut und klicke dann auf <strong>Create repository</strong>.', 'Prüfen Sie Eigentümer, Name und Sichtbarkeit erneut und klicken Sie dann auf <strong>Create repository</strong>.')}</li>
<li>${address('Wähle auf der Seite <strong>Quick Setup</strong> des leeren Repositorys <strong>HTTPS</strong> und kopiere seine URL.', 'Wählen Sie auf der Seite <strong>Quick Setup</strong> des leeren Repositorys <strong>HTTPS</strong> und kopieren Sie seine URL.')}</li>`,
      'image-4-alt': 'GitHubs Formular für ein neues Repository mit hervorgehobener Auswahl Owner.',
      'caption-4': html`Screenshot 4: ${address(
  'Öffne <strong>Owner</strong> und wähle deine Schulungsorganisation, statt die Voreinstellung deines persönlichen Kontos zu übernehmen.',
  'Öffnen Sie <strong>Owner</strong> und wählen Sie Ihre Schulungsorganisation, statt die Voreinstellung Ihres persönlichen Kontos zu übernehmen.')} ${imageLink('github-repository-owner.png')}`,
      'image-5-alt': 'GitHubs Bereich Quick Setup mit der Kopierschaltfläche neben der URL des Remote-Repositorys.',
      'caption-5': html`Screenshot 5: ${address('Kopiere die HTTPS-URL deines eigenen Repositorys.', 'Kopieren Sie die HTTPS-URL Ihres eigenen Repositorys.')} Sie sieht etwa so aus: <code>https://github.com/<span class="ph">YOUR-ORG</span>/<span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span>.git</code>. ${imageLink('github-repository-url.png')}`,
      'upload-intro': address(
        'Kehre in dieselbe Projekt-Session zurück. Ersetze die Beispiel-URL in diesem Prompt durch die gerade kopierte URL:',
        'Kehren Sie in dieselbe Projekt-Session zurück. Ersetzen Sie die Beispiel-URL in diesem Prompt durch die gerade kopierte URL:'),
      'prompt-8-title': 'Den Upload vorbereiten',
      'prompt-8': address(html`Bereite die Veröffentlichung dieses Projekts vor, aber ändere noch keine Dateien.
Initialisiere Git noch nicht, stelle keine Dateien bereit, erstelle keine Commits,
führe keinen Push durch und ändere keine GitHub-Einstellungen.

Ziel:
https://github.com/<span class="ph">YOUR-ORG</span>/<span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span>.git
Erwartete Sichtbarkeit: Private.

Prüfe den tatsächlichen Projekt-Stammordner, den lokalen Git-Status, den Branch,
vorhandene Remotes und das Ziel-Repository, soweit du darauf zugreifen kannst.
Wenn du Eigentümer, Sichtbarkeit oder den leeren Zustand des Ziels nicht prüfen kannst,
sage mir, was ich im Browser prüfen muss. Triff keine Annahmen.

Prüfe, welche Projektdateien dazugehören, und schlage eine .gitignore für Geheimnisse,
lokale Einstellungen, Abhängigkeitsordner und erzeugte Ausgaben vor.
Prüfe auf versehentlich enthaltene Zugangsdaten oder private Daten,
auch in erfassten Dateien und einer vorhandenen Historie.
Nenne Fundstellen, nicht die Werte. Erkläre die Grenzen dieser Prüfung.

Zeige die genauen einzuschließenden und ausgeschlossenen Dateien, das Ziel,
den Branch und die vorgeschlagenen Git-Schritte in verständlicher Sprache.

Falls dieser Ordner noch kein Git-Repository ist, schlage vor, nur diesen
Projektordner mit main als erstem Branch zu initialisieren.
Bei vorhandener Historie, einem anderen Remote, einem nicht leeren Ziel
oder einem Konflikt mit Branch-Schutzregeln: Halte an und erkläre das Problem.
Überschreibe nichts, führe keinen Force-Push durch, ersetze keine Remotes
und umgehe keine Regeln.
Warte auf meine Freigabe.`, html`Bereiten Sie die Veröffentlichung dieses Projekts vor, aber ändern Sie noch keine Dateien.
Initialisieren Sie Git noch nicht, stellen Sie keine Dateien bereit, erstellen Sie keine Commits,
führen Sie keinen Push durch und ändern Sie keine GitHub-Einstellungen.

Ziel:
https://github.com/<span class="ph">YOUR-ORG</span>/<span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span>.git
Erwartete Sichtbarkeit: Private.

Prüfen Sie den tatsächlichen Projekt-Stammordner, den lokalen Git-Status, den Branch,
vorhandene Remotes und das Ziel-Repository, soweit Sie darauf zugreifen können.
Wenn Sie Eigentümer, Sichtbarkeit oder den leeren Zustand des Ziels nicht prüfen können,
sagen Sie mir, was ich im Browser prüfen muss. Treffen Sie keine Annahmen.

Prüfen Sie, welche Projektdateien dazugehören, und schlagen Sie eine .gitignore für Geheimnisse,
lokale Einstellungen, Abhängigkeitsordner und erzeugte Ausgaben vor.
Prüfen Sie auf versehentlich enthaltene Zugangsdaten oder private Daten,
auch in erfassten Dateien und einer vorhandenen Historie.
Nennen Sie Fundstellen, nicht die Werte. Erklären Sie die Grenzen dieser Prüfung.

Zeigen Sie die genauen einzuschließenden und ausgeschlossenen Dateien, das Ziel,
den Branch und die vorgeschlagenen Git-Schritte in verständlicher Sprache.

Falls dieser Ordner noch kein Git-Repository ist, schlagen Sie vor, nur diesen
Projektordner mit main als erstem Branch zu initialisieren.
Bei vorhandener Historie, einem anderen Remote, einem nicht leeren Ziel
oder einem Konflikt mit Branch-Schutzregeln: Halten Sie an und erklären Sie das Problem.
Überschreiben Sie nichts, führen Sie keinen Force-Push durch, ersetzen Sie keine Remotes
und umgehen Sie keine Regeln.
Warten Sie auf meine Freigabe.`),
      'included-files': html`${address('Lies', 'Lesen Sie')} die vorgeschlagene Dateiliste. Sie sollte Quellcode, Tests, README und Projektdokumentation enthalten, aber keine Passwörter, <code>.env</code>-Geheimnisse, installierten Abhängigkeitsordner oder unbeteiligten Dateien. Eine Ignore-Regel entfernt <strong>keine</strong> bereits von Git erfassten Dateien.`,
      'approval-intro': html`Der folgende Prompt gilt für ein <strong>neues, leeres Repository, dessen Regeln den ersten Push auf <code>main</code> erlauben</strong>. ${address(
  'Sende ihn erst nach der Prüfung der Vorbereitung. Ersetze die URL und alle Angaben, die nicht zu den abgestimmten Schritten passen.',
  'Senden Sie ihn erst nach der Prüfung der Vorbereitung. Ersetzen Sie die URL und alle Angaben, die nicht zu den abgestimmten Schritten passen.')}`,
      'prompt-9-title': 'Das Ziel und den Push freigeben',
      'prompt-9': address(html`Ich habe die Dateiliste geprüft und bestätigt, dass dies das richtige,
leere Repository mit der Sichtbarkeit Private ist:
https://github.com/<span class="ph">YOUR-ORG</span>/<span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span>.git

Ich gebe die vorgeschlagene .gitignore und die aufgelisteten Dateien frei.
Initialisiere Git nur bei Bedarf und nur in diesem Projektordner.
Falls eine Commit-Identität fehlt, frage mich, statt eine zu erfinden
oder globale Git-Einstellungen zu ändern.

Erstelle einen Commit mit dem Namen "Add first version with plan and review".
Verbinde genau dieses Ziel, falls noch kein Remote eingerichtet ist,
und pushe den freigegebenen Commit ohne Force auf main.

Halte an, wenn Authentifizierung, Berechtigungen, Repository-Zustand oder
Branch-Regeln von unserer Vorbereitung abweichen.
Ändere keine Zugriffe, Sichtbarkeit, Sicherheitseinstellungen oder Regeln.
Stelle nichts bereit.

Prüfe anschließend, ob GitHub denselben Commit und die erwarteten Dateien enthält.
Zeige die Repository-URL, den Branch und die Commit-ID.
Sage deutlich, wenn ein Vorgang fehlgeschlagen ist oder nicht geprüft werden konnte.`, html`Ich habe die Dateiliste geprüft und bestätigt, dass dies das richtige,
leere Repository mit der Sichtbarkeit Private ist:
https://github.com/<span class="ph">YOUR-ORG</span>/<span class="ph">YOUR-PROJECT</span>-<span class="ph">YOUR-USERNAME</span>.git

Ich gebe die vorgeschlagene .gitignore und die aufgelisteten Dateien frei.
Initialisieren Sie Git nur bei Bedarf und nur in diesem Projektordner.
Falls eine Commit-Identität fehlt, fragen Sie mich, statt eine zu erfinden
oder globale Git-Einstellungen zu ändern.

Erstellen Sie einen Commit mit dem Namen "Add first version with plan and review".
Verbinden Sie genau dieses Ziel, falls noch kein Remote eingerichtet ist,
und pushen Sie den freigegebenen Commit ohne Force auf main.

Halten Sie an, wenn Authentifizierung, Berechtigungen, Repository-Zustand oder
Branch-Regeln von unserer Vorbereitung abweichen.
Ändern Sie keine Zugriffe, Sichtbarkeit, Sicherheitseinstellungen oder Regeln.
Stellen Sie nichts bereit.

Prüfen Sie anschließend, ob GitHub denselben Commit und die erwarteten Dateien enthält.
Zeigen Sie die Repository-URL, den Branch und die Commit-ID.
Sagen Sie deutlich, wenn ein Vorgang fehlgeschlagen ist oder nicht geprüft werden konnte.`),
      'authentication': address(
        'Führe die Authentifizierung selbst über GitHubs vertrauenswürdige Anmeldung durch. Füge niemals ein Token oder Passwort in einen Prompt ein. Die App-Anmeldung und die Authentifizierung für Git-Pushes können getrennte Freigaben erfordern.',
        'Führen Sie die Authentifizierung selbst über GitHubs vertrauenswürdige Anmeldung durch. Fügen Sie niemals ein Token oder Passwort in einen Prompt ein. Die App-Anmeldung und die Authentifizierung für Git-Pushes können getrennte Freigaben erfordern.'),
      'push-blocked': address(
        '<strong>Wenn eine Regel den Push blockiert:</strong> Führe keinen Force-Push durch und deaktiviere die Regel nicht. Bitte die Kursleitung um ein freigegebenes, initialisiertes Repository und verwende einen Feature-Branch mit Pull Request. Ein vollständig leeres Repository kann einen autorisierten ersten Commit benötigen, bevor ein PR möglich ist.',
        '<strong>Wenn eine Regel den Push blockiert:</strong> Führen Sie keinen Force-Push durch und deaktivieren Sie die Regel nicht. Bitten Sie die Kursleitung um ein freigegebenes, initialisiertes Repository und verwenden Sie einen Feature-Branch mit Pull Request. Ein vollständig leeres Repository kann einen autorisierten ersten Commit benötigen, bevor ein PR möglich ist.'),
      'verify-intro': address('Öffne das Repository im Browser und prüfe:', 'Öffnen Sie das Repository im Browser und prüfen Sie:'),
      'verify-checks': html`<li>Der Eigentümer ist <strong><span class="ph">YOUR-ORG</span></strong>, der Repository-Name stimmt und die Sichtbarkeit entspricht der Vereinbarung.</li>
<li>Der erwartete Branch und der neueste Commit sind vorhanden.</li>
<li>Quellcode, Tests, <code>README.md</code>, <code>docs\PLAN.md</code>, <code>docs\TEST-RESULTS.md</code> und <code>docs\REVIEW.md</code> sind sichtbar.</li>
<li>Die README wird richtig dargestellt, und ihre Anweisungen sowie Dokumentlinks sind verständlich.</li>
<li>${address(
  'Es sind keine unerwünschten Dateien enthalten. Bitte die Kursleitung, unerwartete Dateien zu prüfen, bevor du das Projekt weiter teilst.',
  'Es sind keine unerwünschten Dateien enthalten. Bitten Sie die Kursleitung, unerwartete Dateien zu prüfen, bevor Sie das Projekt weiter teilen.')}</li>`,
      'later-changes': address(
        'Starte für spätere Änderungen einen Feature-Branch oder eine isolierte Repository-Session und nutze <strong>Create PR</strong>, sobald die Arbeit zur Prüfung bereit ist. Beachte die vorgeschriebenen prüfenden Personen und Prüfungen der Organisation. Ein Push allein ist weder eine Prüfung noch ein Merge.',
        'Starten Sie für spätere Änderungen einen Feature-Branch oder eine isolierte Repository-Session und nutzen Sie <strong>Create PR</strong>, sobald die Arbeit zur Prüfung bereit ist. Beachten Sie die vorgeschriebenen prüfenden Personen und Prüfungen der Organisation. Ein Push allein ist weder eine Prüfung noch ein Merge.'),
      'checkpoint-6': '<strong>Kontrollpunkt:</strong> Das Repository existiert in der Organisation und enthält die geprüfte Arbeit samt Dokumentation.',

      'step-7-title': stepTitle(7, address('Zeigen, was du gelernt hast', 'Zeigen, was Sie gelernt haben')),
      'demo-intro': address('Gib einer anderen Person oder der Kursleitung eine zweiminütige Demonstration:', 'Geben Sie einer anderen Person oder der Kursleitung eine zweiminütige Demonstration:'),
      'demo-steps': html`<li>${address('Erkläre das Problem der Zielgruppe und eine Sache, die du bewusst ausgeschlossen hast.', 'Erklären Sie das Problem der Zielgruppe und eine Sache, die Sie bewusst ausgeschlossen haben.')}</li>
<li>${address('Zeige eine User Story und führe ihre Akzeptanzkriterien in deinem Projekt vor.', 'Zeigen Sie eine User Story und führen Sie ihre Akzeptanzkriterien in Ihrem Projekt vor.')}</li>
<li>${address('Zeige eine Frage, die Copilot vor einer Entscheidung gestellt hat.', 'Zeigen Sie eine Frage, die Copilot vor einer Entscheidung gestellt hat.')}</li>
<li>${address('Zeige den Plan, ein Testergebnis und die dokumentierte Codeprüfung.', 'Zeigen Sie den Plan, ein Testergebnis und die dokumentierte Codeprüfung.')}</li>
<li>${address('Öffne das Repository der Organisation und zeige den hochgeladenen Commit.', 'Öffnen Sie das Repository der Organisation und zeigen Sie den hochgeladenen Commit.')}</li>`,
      'checkpoint-7': '<strong>Erledigt heißt:</strong> Das vereinbarte Verhalten funktioniert, Nachweise und Grenzen sind dokumentiert, Prüfbefunde sind bearbeitet und das richtige Repository der Organisation enthält das Projekt. „Copilot hat fertig geantwortet“ ist keine Definition von fertig.',

      'sources': html`<h2 id="sources-title">Quellen und Bildnachweise</h2>
<p class="checked-date"><strong>Dokumentation geprüft:</strong> 23. September 2026.</p>
<p>Die Lernaktivitäten, Prompts, Vorlage und das ausgearbeitete Beispiel wurden für diesen Lernpfad verfasst. Produktverhalten und Bezeichnungen wurden anhand der folgenden offiziellen Quellen geprüft. Die lokale App wurde nicht untersucht. Die Screenshots sind veröffentlichte GitHub-Beispiele, keine Behauptung eines Live-Durchlaufs auf dem Computer der teilnehmenden Person.</p>
<h3 id="sources-product-and-workflow-references" data-spy>Quellen zu Produkt und Arbeitsablauf</h3>
<div class="table-wrap"><table class="data-table" role="table">${table(['Quelle', 'Verwendet für'], [
  [externalLink('https://docs.github.com/en/copilot/get-started/quickstart-copilot-app', 'Einstieg in die GitHub Copilot-App'), 'Installationsvoraussetzungen, Anmeldung, Projects, lokale Ordner hinzufügen, Sessions starten, Changes und Create PR.'],
  [externalLink('https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions', 'Mit Agent-Sessions arbeiten'), 'Plan, Interactive, Autopilot, Ausführungsorte und Session-Kontext.'],
  [externalLink('https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands', 'Slash-Befehle der App'), '<code>/plan</code>, <code>/interactive</code> und <code>/review</code>.'],
  [externalLink('https://docs.github.com/en/copilot/concepts/agents/github-copilot-app', 'Über die GitHub Copilot-App'), 'Unterstützte Plattformen, Verfügbarkeit und Organisationsregeln.'],
  [externalLink('https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests', 'Issues und Pull Requests verwalten'), 'Diffs prüfen, PRs erstellen und Prüfabläufe in Organisationen.'],
  [externalLink('https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository', 'Ein neues Repository erstellen'), 'Eigentümer, Repository-Name, Sichtbarkeit und Optionen für erste Dateien.'],
  [externalLink('https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github', 'Lokalen Code zu GitHub hinzufügen'), 'Import in ein leeres Remote-Repository, Authentifizierung, Remote-URL, Git-Initialisierung und Push.'],
  [externalLink('https://github.com/features/ai/github-app', 'Produktseite der GitHub Copilot-App'), 'Quellen der veröffentlichten App-Screenshots.'],
])}</table></div>
<p>${address('Bevorzuge', 'Bevorzugen Sie')} bei Kontovoraussetzungen und Richtlinien die aktuelle Dokumentation gegenüber älteren Ankündigungen.</p>
<h3 id="sources-screenshot-provenance" data-spy>Herkunft der Screenshots</h3>
<p>Die Screenshots stammen aus GitHubs Produktmaterial und Dokumentation, Copyright GitHub, Inc. Sie sind mit Quellen versehene Lehrbeispiele, keine eigens für diesen Workshop erstellten Screenshots. Es wurde kein persönliches Konto oder privates Projekt aufgenommen. Die veröffentlichten App-Beispiele zeigen macOS-Fenster und teilweise ältere Navigationsbezeichnungen. Der Leitfaden unterscheidet sie ausdrücklich von den aktuellen Anweisungen.</p>
<div class="table-wrap"><table class="data-table" role="table">${table(['Lokale Datei', 'Originalbild'], [
  [html`<code>assets\01-app-sidebar.png</code>`, externalLink('https://github.githubassets.com/assets/features_1-mac-c8a8098b6d3149c4.webp', 'Screenshot der GitHub-App-Navigation')],
  [html`<code>assets\02-session-location.png</code>`, externalLink('https://github.githubassets.com/assets/features_2-mac-e57009c187ffdbfd.webp', 'Screenshot der Ausführungsortauswahl der GitHub-App')],
  [html`<code>assets\03-code-changes.png</code>`, externalLink('https://github.githubassets.com/assets/features_3-mac-1f3a4f74bedaf2d3.webp', 'Screenshot der Ansicht Changes der GitHub-App')],
  [html`<code>assets\github-repository-owner.png</code>`, externalLink('https://docs.github.com/assets/images/help/repository/create-repository-owner.png', 'GitHub-Docs-Screenshot der Auswahl Owner')],
  [html`<code>assets\github-repository-url.png</code>`, externalLink('https://docs.github.com/assets/images/help/repository/copy-remote-repository-url-quick-setup.png', 'GitHub-Docs-Screenshot der URL in Quick Setup')],
])}</table></div>
<p>Die drei WebP-App-Bilder wurden in PNG umgewandelt und transparente Bereiche mit Weiß hinterlegt, damit sie in Markdown zuverlässig angezeigt werden. Ihr UI-Inhalt wurde weder umgeschrieben noch erfunden. Die beiden PNGs aus GitHub Docs sind unverändert.</p>`,
      'footer': html`<p class="footer-heading"><strong>Lernmaterialien</strong></p>
<ul class="footer-links">
<li><a href="https://github.com/Tajaly/prompt-to-prototype-learning-path/blob/master/templates/PLAN-TEMPLATE.md">Planvorlage</a></li>
<li><a href="https://github.com/Tajaly/prompt-to-prototype-learning-path/blob/master/examples/PLAN-learning-tracker.md">Beispielplan</a></li>
<li><a href="https://github.com/Tajaly/prompt-to-prototype-learning-path/blob/master/FACILITATOR.md">Vorbereitung für die Kursleitung</a></li>
<li><a href="#sources">Quellen und Bildnachweise</a></li>
</ul>
<p class="footer-note">Die Schritte folgen der offiziellen GitHub-Dokumentation, geprüft am 23. September 2026. Die Screenshots sind Produkt- und Dokumentationsmaterial von GitHub, © GitHub, Inc., und oben als Lehrbeispiele mit Quellen angegeben.</p>`,
    },
  }];
}));
