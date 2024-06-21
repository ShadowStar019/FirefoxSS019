// Disable new tab distractions
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
// user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Show bookmarks bar
user_pref("browser.toolbars.bookmarks.visibility", "always");

// Custom search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);

// Strict content blocking
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.annotate_channels.strict_list.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled", true);
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);
user_pref("privacy.sanitize.pending", "[{\"id\":\"newtab-container\",\"itemsToClear\":[],\"options\":{}}]");
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);

// Disable first run page
user_pref("browser.aboutwelcome.enabled", false); 
// Disable privacy notice
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);

// Disable remembering addresses and credit cards
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
// Disable remembering passwords
user_pref("signon.rememberSignons", false);

// Disable Firefox data collection
user_pref("datareporting.healthreport.uploadEnabled", false);
// Disable Firefox studies
user_pref("app.shield.optoutstudies.enabled", false);
