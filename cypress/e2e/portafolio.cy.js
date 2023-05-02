describe('Suite - conjuntos de pruebas', () => {
   it("Validar pagina de inicio", () =>{
        cy.visit("https://portafolio-henry.vercel.app/")
        cy.get('.text-5xl').contains("HenryS")
        cy.get('.mb-20 > .rounded-2xl').should("be.visible")
        cy.get('.flex-col > .text-4xl').contains("Tester QA")
        cy.get('.flex-col > .text-gray-500').contains("Soy una persona proactiva, excelente compañero de equipo, organizado, responsable y me gusta ayudar a los demas. Comenzar mi carrera profesional en una empresa reconocida me motiva arduamente, tengo gran facilidad de aprender procesos nuevos y un inmenso placer en integrarme al equipo de trabajo, por lo que le puedo asegurar que en breve estaré desempeñando las funciones del puesto optimamente.")
        cy.get('div > .w-fit').click()
   })
});
