/**
 * This file is part of agora-dev-box.
 * Copyright (C) 2014-2016  Agora Voting SL <agora@agoravoting.com>

 * agora-dev-box is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License.

 * agora-dev-box is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with agora-dev-box.  If not, see <http://www.gnu.org/licenses/>.
**/

/*
 * ConfigService is a function that returns the configuration that exists
 * in this same file, which you might want to edit and tune if needed.
 */

var AV_CONFIG_VERSION = '3.3.0';

var avConfigData = {
  // the base url path for ajax requests, for example for sending ballots or
  // getting info about an election. This url is usually in the form of
  // 'https://foo/api/v3/' and always ends in '/'.
  base: '',
  theme: "default",
  baseUrl: "https://agora/elections/api/",
  freeAuthId: 1,
  
  // Webpage title
  webTitle: "Agora Voting",
  
  // Show 'Success Action' tab in admin agora_gui
  showSuccessAction: false,

  // AuthApi base url
  authAPI: "https://agora/authapi/api/",
  dnieUrl: "https://agora.dev/authapi/api/authmethod/dnie/auth/",
  // Agora Elections base url
  electionsAPI: "https://agora/elections/api/",

  // Agora Admin help url
  helpUrl: "https://bit.ly/avguiadeuso",

  authorities: ['auth2'],
  director: "auth1",

  resourceUrlWhitelist: [
    // Allow same origin resource loads.
    'self',

    // Allow loading from our assets domain.  Notice the difference between * and **.
    // Uncomment the following to allow youtube videos
    //
    // 'https://www.youtube.com/**',
    // 'https://youtube.com/**'
  ],

  // i18next language options, see http://i18next.com/pages/doc_init.html for
  // details
  i18nextInitOptions: {
    // Default language of the application.
    //
    // Default: 'en'
    //
    language: "en",


    // Forces a specific language.
    //
    // Default: not set
    //
    lng: "en",


    // specifies the set language query string.
    //
    // Default: "lang"
    //
    detectLngQS: 'lang',


    // Specifies what translations will be available.
    //
    // Default: ['en', 'es', 'gl', 'ca']
    //
    // lngWhitelist: ['en', 'es', 'gl', 'ca'],
  },

  // specifies the language cookie options,
  // see https://github.com/ivpusic/angular-cookie#options
  i18nextCookieOptions: {
    // Expiration in days
    //
    // Default: 360
    //
    // expires: 360,


    // Cookie domain
    //
    // Default: not set
    //
    // domain: 'foobar',
  },

  // configure $locationProvider.html5Mode
  // see https://code.angularjs.org/1.2.28/docs/guide/$location
  //
  // Default: false
  // locationHtml5mode: false,
  locationHtml5mode: true,

  // If no Route is set, this is the route that will be loaded
  //
  // Default: '/admin/login'
  defaultRoute: '/admin/login',

  timeoutSeconds: 3600,

    publicURL: "https://agora/elections/public/",
  
  // if we are in debug mode or not
  debug: false,

  // contact data where users can reach to a human when they need it
  contact: {
    // Support contact email displayed in the footer links
    email: "contact@example.com",
    // Sales contact email displayed in the footer links
    sales: "sales@example.com",
    tlf: ""
  },

  // social networks footer links
  social: {
      facebook: "https://www.facebook.com/AgoraVoting",
      twitter: "https://twitter.com/agoravoting",
      twitterHandle: "agoravoting",
      googleplus: "https://plus.google.com/101939665794445172389/posts",
      youtube: "https://www.youtube.com/results?search_query=Agora+Voting",
      github: "https://github.com/agoravoting/"
  },

  // technology footer links
  technology: {
    aboutus: "https://agoravoting.com/#aboutus",
    pricing: "https://agoravoting.com/#pricing",
    overview: "https://agoravoting.com/overview/",
    solutions: "https://agoravoting.com/solutions/",
    admin_manual: "https://bit.ly/avguiadeuso"
  },

  // legality footer links
  legal: {
    terms_of_service: "https://agoravoting.com/tos/",
    cookies: "https://agoravoting.com/cookies/",
    privacy: "https://agoravoting.com/privacy/",
    security_contact: "https://agoravoting.com/security_contact/",
    community_website: "https://agoravoting.org"
  },
  
  documentation: {
    faq: "https://nvotes.com/doc/en/",
    overview: "https://agoravoting.com/overview/",
    technical: "https://agoravoting.com/static/generic_tech_overview_20_08_15.pdf",
    security_contact: "https://agoravoting.com/security_contact/"
  },
  
  documentation_html_include: "",
  
  legal_html_include: "",

  // Details pertaining to the organization that runs the software
  organization: {
    // Name of the organization, appears in the logo mouse hover, in the login
    // page ("Login into __NAME__ admin account"), in the poweredBy, etc
    orgName: 'Agora Voting',

    // URL that the logo links to
    orgUrl: 'https://agoravoting.com'
  },

  verifier: {
    link: "https://agora/verifier/agora-verifier",
    hash: "4a9928d4c10216189d9c9746ca35e702e957b307e0519b4b31438c7a57bf829a",
  },

  success: {
    text: ""
  },

  tos: {
    text:"",
    title: ""
  }
};

angular.module('avConfig', [])
  .factory('ConfigService', function() {
    return avConfigData;
  });

angular.module('avConfig')
  .provider('ConfigService', function ConfigServiceProvider() {
    _.extend(this, avConfigData);

    this.$get = [function ConfigServiceProviderFactory() {
    return new ConfigServiceProvider();
    }];
  });
