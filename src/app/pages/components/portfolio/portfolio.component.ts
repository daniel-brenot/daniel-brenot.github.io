import { Component } from '@angular/core';

interface Project {
  /** Link to the github page */
  sourceCodeLink: string;
  /** Short name of the project */
  name: string;
  /** General description of the project */
  description: string;
  /** What contribution I made to the project */
  contribution: string;
  /** Languages used in the project */
  languages: string[];
  /** Frameworks used in the project */
  frameworks: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects: Project[] = [
    {
      name: 'rust-algotrader',
      sourceCodeLink: '',
      description: 'A rust project for trading securities on multiple cryptocurrency exchanges by performing analysis on orderbook data and making informed high-speed low-latency transactions.',
      contribution: 'Kept latency extremely low (<10ms latency and processing time) and refactored the application multiple times for higher reliability for critical circumstances.',
      languages: ['rust'],
      frameworks: ['reqwest']
    },
    {
      name: 'cache-size',
      sourceCodeLink: 'https://github.com/lovesegfault/cache-size',
      description: 'A rust library allowing for getting the size of the current systems CPU cache. Can be used to determine the size of data structures to allow them to fit in cache lines when compiling a project.',
      contribution: 'Added support for AMD CPUs',
      languages: ['rust'],
      frameworks: []
    },
    {
      name: 'node-pty',
      sourceCodeLink: 'https://github.com/daniel-brenot/node-pty',
      description: 'A library allowing javascript applications running on node.js to create pseudo-terminals using a native binding',
      contribution: 'Rewrote the entire native portion of the project using Rust and NAPI. Fixed a large number of the issues in the project in the process.',
      languages: ['typescript', 'javascript', 'rust'],
      frameworks: ['NAPI']
    },
    {
      name: 'ib-tws-api',
      sourceCodeLink: 'https://github.com/daniel-brenot/ib-tws-api',
      description: 'A connector library for interactive brokers written in typescript. Allows for placing trades and reacting to changes in market conditions in real time.',
      contribution: 'Rewrote the library with typings and a more complete API covering more of the functionality from the server than the original API.',
      languages: ['typescript', 'javascript'],
      frameworks: []
    },
    {
      name: 'node-binance-fast',
      sourceCodeLink: 'https://github.com/daniel-brenot/node-binance-fast',
      description: 'A connector library for binance written in typescript. Allows for placing trades and receiving order updates in real time.',
      contribution: 'Rewrote the library with typings and a more complete API covering most of the available functionality.',
      languages: ['typescript', 'javascript'],
      frameworks: []
    },
    {
      name: 'point-in-polygon',
      sourceCodeLink: 'https://github.com/daniel-brenot/point-in-polygon',
      description: 'Allows for detection of a point within a defined polygon.',
      contribution: 'Ported the original algorithm from PHP and made it much more efficient',
      languages: ['typescript', 'javascript'],
      frameworks: []
    },
    {
      name: 'django-nested-inline',
      sourceCodeLink: 'https://github.com/s-block/django-nested-inline',
      description: 'Adds the ability to nest admin inlines within other admin inlines in django.',
      contribution: 'Patched compatability with content security policy to allow the library to run in more secure environments',
      languages: ['python', 'javascript', 'html'],
      frameworks: ['django']
    },
    {
      name: 'wacky-waving-arm-inflateable-tube-man',
      sourceCodeLink: 'https://github.com/daniel-brenot/wacky-waving-arm-inflateable-tube-man',
      description: 'Shows a wacky waving arm inflateable tube man in an SFML rendered window.',
      contribution: 'Created as a college assignment.',
      languages: ['c++'],
      frameworks: ['SFML']
    }
  ];
}
