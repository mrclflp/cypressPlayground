import * as Command from '../support/commands';

describe('should check individual sections of the homepage', () => {

  beforeEach(() => {
    cy.visit('https://www.flowpay.io')
    Command.closeCookies()
  });

  it('should check the homepage', () => {
    // main headline
    cy.contains('Chytré a jednoduché financování pro růst vašeho podnikání').should('be.visible')
    cy.contains('Až 1 000 000 Kč bez zbytečného papírování a online. Provozní úvěr, který můžete využít na cokoliv.').should('be.visible')
    // 3 key advantages
    cy.contains('Vše vyřídíte online').should('be.visible')
    cy.contains('Žádost trvá jen pár minut').should('be.visible')
    cy.contains('Bez zbytečného papírování').should('be.visible')
    cy.get('button:contains(Mám zájem o financování)').eq(0).should('be.visible') // there are 3 identical buttons
    // Příběhy klientů
    cy.get('a:contains(Chci si přečíst příběhy klientů)').should('be.visible')
      .and('have.attr', 'href', 'https://www.flowpay.io/kopie-reference')
    // Kolik si mohu půjčit?
    cy.contains('Kolik si mohu půjčit?').should('be.visible')
    cy.get('button:contains(Mám zájem o financování)').eq(1).should('be.visible')
    // Jak to funguje
    cy.contains('Jak to funguje').should('be.visible')
    cy.contains('Nemůže to být jednodušší. Získejte financování během několika minut.').should('be.visible')
    cy.contains('Pomocí naší aplikace připojíte partnerskou platformu, kterou využíváte (POS/Ecommerce platformu)').should('be.visible')
    cy.contains('V kalkulačce zvolíte výši úvěru a délku splácení. Hned se dozvíte kolik zaplatíte, včetně rozpisu jednotlivých splátek.').should('be.visible')
    cy.contains('Posledním krokem je online ověření vaší totožnosti a bankovního účtu. Systém poté vyhodnotí vaši žádost.').should('be.visible')
    cy.contains('Hotovo! Do emailu vám zašleme smlouvu k podpisu. Po jejím podepsání peníze míří na účet.').should('be.visible')
    cy.get('button:contains(Mám zájem o financování)').eq(2).should('be.visible')
    // Na co zákazníci využívají náš provozní úvěr?
    cy.contains('Na co zákazníci využívají náš provozní úvěr?').should('be.visible')
    cy.contains('Rozšíření podniku').should('be.visible')
    cy.contains('Zřiďte si nový prostor k podnikání, nebo expandujte na nové zahraniční trhy!').should('be.visible')
    cy.contains('Skladové zásoby').should('be.visible')
    cy.contains('Nakupte větší množství skladových zásob a mějte tak více produktů skladem ihned k odběru.').should('be.visible')
    cy.contains('Plánovaná investice').should('be.visible')
    cy.contains('Nakupte nové zařízení, které vám pomůže k rychlejšímu odbavování zákazníků.').should('be.visible')
    cy.contains('Marketingové kampaně').should('be.visible')
    cy.contains('Najděte nové zákazníky a oslovte je díky většímu rozpočtu na marketing!').should('be.visible')
    // Zvyšte růst podniku...
    cy.contains('Zvyšte růst svého podniku o desítky % ročně díky chytrému financování!').should('be.visible')
    cy.contains('Rozšížení podniku přináší nové možnosti, více prostoru nebo větší uplatnění na trhu.').should('be.visible')
    cy.contains('Financování do skladových zásob zaručí více prodejů a rychlý návrat investice.').should('be.visible')
    cy.contains('Výkonnější marketing a online kampaně vám přivedou více zákazníků.').should('be.visible')
    cy.get('button:contains(Chci financování)').should('be.visible')
    cy.get('a:contains(Kalkulačka >)').should('be.visible')
      .and('have.attr', 'href', 'https://www.flowpay.io/financing-info')
    // myFlowpay
    //cy.contains('Financování pod kontrolou').should('be.visible')
    cy.get('[title="kalkulacka_animace.gif"]').should('be.visible')
    // Blog
    //cy.contains('Novinky na našem blogu').should('be.visible')
  });
})