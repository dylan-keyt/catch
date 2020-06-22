## Introduction

Thank you for investing your time in Catch's code challenge. You should spend not more than 4 hours on the code test. Your solution will be the starting point to be used for the pair programming exercise in our technical interview.

## User Story

As a user of Catch.com.au, I would like to see a list of products that can be sorted by price.

## Details

Using the following endpoint, request and render a Product List page with the response: http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json

- Render a Product List Heading with the provided metadata
- Render a Product Card for each item in the results array.
- Products with retailPrice will be marked with a strikethrough
- Products with quantityAvailable of 0 must be displayed as Sold Out.
- Note that amounts in the response data are in cents, and must be converted into dollars for display.
- Implement both these sorting options:
    - Price (high-low)
    - Price (low-high)

## Expectations

We value functional, well structured and well-tested code at Catch. Below are our expectations:

- TypeScript/Javascript + React implementation with state management approach of your choice.
- Well-structured code with best practices applied where relevant.
- Well tested code.
- Cross-browser functional. Minimum IE11 support.
- Responsive and SEO friendly.
- A README file explains any coding or architecture decisions you made, along with instructions to bootstrap and run your program.

Feel free to send through any questions you may have.

## Included files

- README.md
- Mockup of Product List page
