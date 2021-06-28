# Merry Weather

Search for current weather data by city, state, and country. See the finished product [here](https://ubercj.github.io/merry-weather/).

This is from The Odin Project's full-stack web development curriculum - read more [here](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/weather-app).

This is a simple app that takes a search query, hits the [OpenWeather API](https://openweathermap.org/api), and displays some basic data and changes the background image based on the weather results.

This was pretty fun to make! I couldn't quite figure out how to get results for cities that share a name (e.g. Portland, OR and Portland, ME). I looked through the API docs and couldn't find how to get a list of all cities that share a name. I saw a couple of apps by other Odin Project students that show a list of results, so it must be possible. I'm satisfied for now, though. The point of this exercise was to fetch data from an external API and use it in my own app, and I've satisfied those requirements.

## Edit 6/28/21

The Odin Project's module on [JavaScript form validation](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/forms-javascript) recommended going back and adding some validations to the Library project from earlier, but I decided to do it to this Weather App instead.

I used the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api) to add custom classes and error messages when filling in the form. The form will not submit if there are invalid fields (i.e. an `input` element with the `input:invalid` CSS pseudoclass). Invalid fields are outlined in red, and an error message appears with more information.