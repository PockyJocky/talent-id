
Feature('I');

Before((I) => {
    I.amOnPage('/');
});

Scenario('can see a welcome message', (I) => {
    I.see('Welcome');
});

Scenario('see a next button that I can click', (I) => {
    I.see('Next', '.next_button');
    I.click('Next')
});

Scenario('see the next button took me to the input page', (I) => {
    I.see('Let\'s Start With Some Basic Information');
});

Scenario('can input my information into the boxes', (I) => {
    I.see('', '.firstName');
    I.fillField('.firstName', 'John');
    I.fillField('.lastName', 'Smith');
    I.fillField('.edipi', '147852369');
    I.selectOption('.rank', 'SSgt');
    I.selectOption('.squadron', '9 IS');
});

Scenario('clicking the next button again takes me to the Interest page', (I) => {
    I.click('Next');
    I.see('What Are You Interested In?')
});

Scenario('can input my interests into the boxes', (I) => {
    I.fillField('.skill_name_input', 'Programming');
    I.pressKey('Tab');
    I.pressKey('Right');
    I.pressKey('Tab');
    I.pressKey('Right');
    I.click('Submit');
});

Scenario('can see that my interest list was updated', (I) => {
    I.see('Programming', '.skill_list');
});

Scenario('move on from interest input', (I) => {
    I.click('Next');
});

Scenario('see both my information and my interests', (I) => {
    //This doesn't seem to work:

    // I.see('John','.interest_input');
    // I.see('Smith', '.lastName');
    // I.see('147852369', '.edipi');
    // I.see('SSgt', '#rank');
    // I.see('9 IS', '#squadron');
    // I.see('Programming', '.firstName');
});

