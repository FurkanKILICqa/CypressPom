class RegisterPage {
    // Web Elementleri
    constructor() {
        this.firstNameInput = '#first_name'
        this.lastNameInput = '#last_name'
        this.dateOfBirthInput = '#dob'
        this.addressInput = '#address'
        this.postCodeInput = '#postcode'
        this.cityInput = '#city'
        this.stateInput = '#state'
        this.countrySelect = '#country'
        this.phoneInput = '#phone'
        this.emailInput = '#email'
        this.passwordInput = '#password'
        this.registerButton = '[type="submit"]'
    }


    // Metotlar
    writeFirstName() {
        cy.get(this.firstNameInput).type('Furkan')
    }

    writeLastName() {
        cy.get(this.lastNameInput).type('Kilic')
    }

    writeDateOfBirth() {
        cy.get(this.dateOfBirthInput).type('1996-12-12')
    }

    writeAddress() {
        cy.get(this.addressInput).type('Üçtutlar Mahallesi 8. sokak')
    }

    writePostCode() {
        cy.get(this.postCodeInput).type('50500')
    }

    writeCity() {
        cy.get(this.cityInput).type('Amasya')
    }

    writeState() {
        cy.get(this.stateInput).type('Merkez')
    }

    selectCountry() {
        cy.get(this.countrySelect).select('Turkiye')
    }

    writePhone() {
        cy.get(this.phoneInput).type('05558887799')
    }

    writeEmail() {
        cy.get(this.emailInput).type('faker1234@faker.com')
    }

    writePassword() {
        cy.get(this.passwordInput).type('12345678')
    }

    clickRegister() {
        cy.get(this.registerButton).click()
    }


}
export const register = new RegisterPage()

