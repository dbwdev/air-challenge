# Air Frontend Challenge
Deployed site: https://airchallenge.netlify.app

## Additonal Criteria
- [ ]  Polish

    Time permitting, try to find ways to enhance the experience of the site with loading states, animations, and design enhancements.

    * Not implemented, but I would have added skeloton loading states for the cards before they have been rendered.

- [ ]  Responsiveness

    We are purposefully not providing a mobile design because we'd like to see what you can come up with when designs haven't been given. Use your best judgment on how you think the page would respond at smaller sizes. The page should be able to be resized down to `320px` wide without compromising the UX.

    * Not implemented, but I would try to rearrange the card image on top and the name and description on the bottom to make the cards more readable at on smaller screens.

- [ ]  SEO friendliness

    Use best practice semantic markup and structured data.

    * Given more time, I would add the proper titles, meta tags and other SEO enhancements using `react-helmet`

- [ ]  Accessibility

    Think about screen readers and users with any disabilities. Follow the best practices as set forth and discussed by [The A11Y Project](https://a11yproject.com/).

    * Given more time, I would audit app using `react-app` and other a11y tools to implement ARIA labels where necessary, ensure good UX with keyboard and tabbing, etc.

- [ ]  Performance

    The faster your page loads and performs while using it, the better.

    * Given more time, I would have implemented a more sophisticaed search algorithm which uses memoization to more performantly render the card list. Since the card list does not change much (in the context of this challenge) it is a good candidate for caching via memoization.

- [ ]  Testing

    Tests proving your application works make us happy. Integration tests in particular!

    * Not implemented, but the first integration tests I would write for are `PeopleSearch` for the search/filter  functionality and the `PeopleList` for rendering the cards in the DOM using `react-testing-library`.

- [ ]  Code Structure

    We will be looking at how you structured your React components. We strongly encourage using TypeScript as it helps a new developer (like the person who will be reviewing your code) understand how your components work

    * My code structure given the scope of this project while leaving room for scaling to more engineers working in this codebase:

```sh
│   ├── api // for HTTP requests to backend services, currently holds the the mock function to get list of people
│   ├── app // holds top level React framework files near the top of the component hierarchy
│   ├── assets // holds static images, icons, etc.
│   │   └── icons
│   ├── common // shared utilites, hooks, types, etc.
│   │   ├── hooks // shared hooks not tied to logic of a particular domain
│   │   ├── styles // `styled-component` global styles and variables
│   │   ├── types // shared and custom TS types
│   │   └── utils // shared utilities, mostly pure functions and with minimal side effets
│   ├── components // shared components across pages
│   │   └── ui // for non-React UI-only `styled-components` components
│   ├── index.tsx // app entry point, keeping logic here as thin as possible
│   ├── pages // for route level container components, would use router like `react-router` if challenge involved multiple pages
│   └── store // For holding domain related state and actions
|      ├── contexts // React context state organized by domain
│       └── hooks // React state setters, getters, and side effects organized by domain
```