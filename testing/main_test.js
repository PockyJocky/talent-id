
Feature('I');

Before((I) => {
    I.amOnPage('/new');
});

Scenario('can see a welcome message', (I) => {
    I.amOnPage('/');
    I.see('Welcome');
});

Scenario('see a next button that I can click', (I) => {
    I.see('New User');
    I.click('New User');
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

Scenario('see my information', async (I) => {
    I.amOnPage('/list');

    I.waitForElement('.person')
    I.see('John');
    I.see('Smith');
    I.see('147852369');
    I.see('9 IS');
});

Scenario('can search for people with a specific skill', async (I) => {
    await I.amOnPage('/list');

    I.see('Search:')
    I.fillField('.search_box', "Programming")
    I.see('John')

    //make a new person to see if you can see that one instead of the previous one

    await I.amOnPage('/new');

    I.fillField('.firstName', 'Micheal');
    I.fillField('.lastName', 'Jones');
    I.fillField('.edipi', '90210');
    I.selectOption('.rank', 'A1C');
    I.selectOption('.squadron', '13 IS');

    I.click('Next');

    I.fillField('.skill_name_input', 'Design');
    I.pressKey('Tab');
    I.pressKey('Right');
    I.pressKey('Tab');
    I.pressKey('Right');
    I.click('Submit');

    //search for that person

    await I.amOnPage('/list');

    I.see('Search:');
    I.fillField('Search:', "Design");
    I.see('Micheal');
    I.dontSee('John')
});

