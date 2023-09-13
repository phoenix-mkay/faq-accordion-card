const accordionQuestions = document.querySelectorAll(".accordion-question")
accordionQuestions.forEach(question => {
    question.addEventListener('click',()=>{
        // Get it parent node
        // console.log( question.parentElement)
        // Remove active from all accordions
        question.parentElement.classList.toggle("active")
    })
})


