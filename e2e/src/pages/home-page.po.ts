import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class HomePage {

    navigateToHome(): promise.Promise<any> {
        return browser.get('/home');
    }

    getPageTitle(): promise.Promise<any> {
      return element(by.css('app-root h1')).getText();
  }

    getAllList(): ElementFinder {
      return element(by.id('all'));
    }

    getLightList(): ElementFinder {
      return element(by.id('light'));
    }

    getDarkList(): ElementFinder {
      return element(by.id('dark'));
    }

    getLightButton(): ElementFinder {
    return element(by.css('btn btn-primary'));
    }

    getDarkButton(): ElementFinder {
    return element(by.css('btn btn-danger'));
    }
}
