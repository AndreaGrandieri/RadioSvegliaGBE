/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//                                                             //
//                                                             //
// Andrea Grandieri andreagrandieri.github.io                  //
// Copiloted by Copilot@GitHub                                 //
//                                                             //
//                                                             //
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// Dizionario di mapping tra le lingue e le sigle utilizzate per indicarle
// To add a new language, add a new entry in the dictionary following the pattern
// Make sure that every entry is also present in the translationDictionaryForLINGUA dictionary
export const mappingDictionaryForLanguages = {
    "en": "English",
    "it": "Italiano"
}

// Dizionario di traduzione della parola "Lingua" in tutte le lingue supportate
// To add a new language, add a new entry in the dictionary following the pattern
// Make sure that every entry is also present in the mappingDictionaryForLanguages dictionary
export const translationDictionaryForLINGUA = {
    "en": "Language",
    "it": "Lingua"
}

// Dizionario di traduzione del testo di warning per l'injecting in "broadcastTarget_engine_fetching_inErrorState"
export const translationDictionaryFor_broadcastTarget_engine_fetching_inErrorState = {
    "en": "There was some error while fetching the CDN. Some parts of the site may be broken and/or missing. You may try <a href='javascript:reloadPage();'>reloading</a> the page.",
    "it": "Si è verificato un errore durante il fetching dei dati dal CDN. Alcune parti del sito potrebbero risultare non funzionanti e/o mancanti. Puoi provare a <a href='javascript:reloadPage();'>ricaricare</a> la pagina."
}

// Set di variabili per la gestione del contenuto con id "poweredbyahref"
export const referenceLink = "https://andreagrandieri.github.io/pages/grn-deploy-webstatic";
export const linkToQuery = "https://raw.githubusercontent.com/AndreaGrandieri/andreagrandieri.github.io/cdn/poweredbyahref.json";
export const defaultReferenceLink_poweredbyahref = "https://andreagrandieri.github.io/pages/en/grn-deploy-webstatic";

// baseurl. Il valore di questa variabile dovrebbe essere uguale al valore dell'opzione "baseurl" nel file _config.yml. Per baseurl non presenti, in quanto non presenti nel file _config.yml, utilizzare ""
export const baseurl = "";
