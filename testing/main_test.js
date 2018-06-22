
Feature('I');

Before((I) => {
    I.amOnPage('/');
});

Scenario('see a welcome message', (I) => {
    I.see('Welcome');
});

Scenario('see a New User button', (I) => {
    I.see('New User');
    I.click('New User');
});

Scenario('see New User button took me to the input page', (I) => {
    I.amOnPage('/new');
    I.see('Let\'s Start With Some Basic Information');
});

Scenario('make a new user', (I) => {
    I.amOnPage('/new');
    I.see('DOD ID Number');
    I.fillField('#TextField1', '1478523690');

    I.click('#Dropdown3-option');
    I.click('SSgt');

    I.fillField('#TextField4', 'John');
    I.fillField('#TextField6', 'Smith');

    I.click('#Dropdown8-option');
    I.click('9 IS');

    I.click('Next');
    I.see('Skill:')

    I.fillField('#TextField56', 'Programming');
    I.pressKey('Tab');
    I.pressKey('Right');
    I.pressKey('Tab');
    I.pressKey('Right');

    I.click('Next');
    I.click('Submit');
});

Scenario('see my information', async (I) => {
    I.amOnPage('/list');

    I.waitForElement('.ms-DetailsRow-cell')
    I.see('John');
    I.see('Smith');
});

Scenario('make a second person', async (I) => {
    await I.amOnPage('/new');

    I.fillField('#TextField4', 'Micheal');
    I.fillField('#TextField6', 'Jones');
    I.fillField('#TextField1', '9021056478');

    I.click('#Dropdown3-option');
    I.click('A1C');

    I.click('#Dropdown8-option');
    I.click('13 IS');

    I.click('Next');

    I.fillField('#TextField56', 'Design');
    I.pressKey('Tab');
    I.pressKey('Right');
    I.pressKey('Tab');
    I.pressKey('Right');

    I.click('Next');
    I.click('Submit');
});

Scenario('can search for people with a specific skill', async (I) => {
    await I.amOnPage('/list');

    I.see('', '#ComboBox1-input');
    I.fillField('#ComboBox1-input', "Programming");
    I.pressKey('Enter');
    I.see('John');
    I.dontSee('Micheal');

    I.fillField('#ComboBox1-input', "Design");
    I.pressKey('Enter');
    I.see('Micheal');
    I.dontSee('John')
});
