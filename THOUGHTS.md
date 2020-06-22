# design decisions

> this is my thoughts about design decisions regarding scalability and app structure.

## styling

### using scoped component styles vs non scoped styles

I would take this decision depending on the maturity of the team and understanding of css: 

- for a team which is really good with css, they can harness the power of cascaded styles. and thus I would go for separate styles (non-scoped).
- for people who are less comfortable with css, I would keep it safe and scoping component styles. this way they can experiment safely.

### using styles inside [component].vue file, or importing style files and keeping them separate

I would chose between 3 options depending on the complexity and team structure

1. if the component is fairly simple without complex styles, I would keep it inside the [component].vue file for readability and ease of change.
2. for fairly complex components separating styles into a separate file is better, but where to store it? 
    - **[component_folder]/[component].styles.scss:** this provide easier access. 
    - **under styles folder:** this makes it easier separating styles into a separate package if needed, generally I would go with this approach if there are **separate teams concerned about design** aspects, or **the app is heavily concerned with theaming and styling testing (a-b testing)** because this makes it easier to swap files in different builds or just loading them as external packages.  

## i18n

- although the app is fairly simple for now, implementing internationalization first in the app is way better then stumbling upon the fact that you need that in later time.

## using typescript

- for large apps I find using typescript is more convenient than pure javascript, it is way easier than using other alternatives like prop types or the declaration of properties in vue js. the only reason I didn't use typescript for this app, is that I didn't know if it is acceptable or not.


## conventional commits

- using conventional commits makes it easier to automatically generate release notes and query changes. in this project I only followed commit messages guidelines.