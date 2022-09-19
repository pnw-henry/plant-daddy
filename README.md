# Plant Daddy

Plant Daddy is a React Web Application that displays key information for a selection of house plants. In the "A-Z Plants" section of the app, the user can look up their desired plant, read about it, and see an option to add it to their favorites list. In the "My List" section, a user can also add their own plant entry (as it stands, this is reserved only to name and image), which is then sent to the server for future use. 

## Installation

No API key required. 

* Fork and clone the Github [repository](https://github.com/pnw-henry/plant-daddy) into a local machine.
* Navigate to the directory created by using Finder (Mac), Explorer (Windows) or a command line interface:
	On Mac, open the terminal app, cd into plant-daddy directory, type npm start. This will start the react server hosting the app components and files.
	Navigate to ./plant-daddy/json-server-template/ and type npm run dev. This will start the json server holding the plant object responsible for populating the "A-Z Plants" section of the app.
	

## Usage

Plant Daddy is divided into four sections: Home, A-Z Plants, My List, and Favorites. 

The Home section contains a simple introduction. A-Z Plants contains a selection of plants manually added to the server object. You can also search for an existing plant and favorite. My List has a form that can be used to submit a new plant to the server. Finally, the Favorites section contains the list of plants that were favorite'd in the A-Z Plants section.

## Roadmap

* Implement the ability to sort results.
* Update the Home page to be more visually pleasing and interactive.
* Add more detailed plant information.


## Contributing

Pulls requests are welcome.

## License

GPL-3.0
