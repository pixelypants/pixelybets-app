import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'
import { ObservableStore } from '@codewithdan/observable-store';
import { ReduxDevToolsExtension } from '@codewithdan/observable-store-extensions';

singleSpa.registerApplication('navbar', () => SystemJS.import('@portal/navbar'), isActive.navbar)
singleSpa.registerApplication('sports', () => SystemJS.import('@portal/sports'), isActive.sports)

ObservableStore.addExtension(new ReduxDevToolsExtension({ reactRouterHistory: history }))

singleSpa.start()
