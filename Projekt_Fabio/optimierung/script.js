function highlightMatches(searchText) {
  const bodyText = document.body.innerHTML; // Den gesamten HTML-Inhalt der Seite erhalten
  const regex = new RegExp(`(${searchText})`, "gi"); // Regex für die Suche nach dem Text (groß- und kleinschreibung beachten)

  // Wenn Übereinstimmungen gefunden werden, wird der Text markiert
  const highlightedText = bodyText.replace(
    regex,
    '<span style="background-color: yellow;">$1</span>'
  );

  // Den neuen HTML-Inhalt wieder in den Body einfügen
  document.body.innerHTML = highlightedText;
}

// Beispiel: Suche nach "Suchbegriff" auf der Seite und markiere ihn
highlightMatches("Suchbegriff");
