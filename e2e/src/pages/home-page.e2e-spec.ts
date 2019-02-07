import { browser } from 'protractor';
import { HomePage } from './home-page.po';

describe(' Home Page', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.navigateToHome();
    });

    it('Should have the page brand name', () => {
        expect(homePage.getPageTitle()).toEqual('Star Wars App');
    });

    it('Should locate the all tab', () => {
        expect(homePage.getAllList()).toBeDefined();
    });

    it('Should locate the light tab', () => {
      expect(homePage.getAllList()).toBeDefined();
    });

    it('Should locate the dark tab', () => {
      expect(homePage.getAllList()).toBeDefined();
    });

    it('Should add character to light side when clicked', () => {
        const button = homePage.getLightButton();
        button.click();
        expect(browser.driver.getCurrentUrl()).toContain('/album');
    });

    // it('Should find the learn more button', () => {
    //     expect(homePage.getLearnMoreButton().getText()).toEqual('Learn more');
    // });

    // it('Should redirect to the album page when learn more is clicked', () => {
    //     const learnMore = homePage.getLearnMoreButton();
    //     learnMore.click();
    //     expect(browser.driver.getCurrentUrl()).toContain('/album');
    // });
});
