# Taekwondo Sparring Generator

A web-based application for generating and managing Taekwondo sparring matches. This tool helps coaches and tournament organizers efficiently pair athletes for training matches based on weight categories and other parameters.

## Features

- Import athlete data directly from Excel or manual input
- Customizable weight difference limits between opponents
- Multiple match generation options (1-4 matches per athlete)
- Support for multiple mats/rings (1-4)
- Export generated matches to Excel
- Clean and intuitive user interface
- Responsive design for all devices

## Technology Stack

- HTML5
- CSS3 with Bootstrap 5.1.3
- Vanilla JavaScript (ES6+)
- SheetJS (XLSX) for Excel import/export functionality

## How It Works

1. **Data Input**
   - Enter athlete data in the format: `Name Surname weight`
   - Paste directly from Excel (columns: name, surname, weight)
   - Each athlete should be on a new line

2. **Configuration**
   - Set maximum weight difference between opponents (1-10 kg)
   - Choose number of matches per athlete (1-4)
   - Select number of available mats (1-4)

3. **Match Generation**
   - Algorithm pairs athletes based on:
     - Weight difference limits
     - Even distribution of matches
     - Mat availability
   - Ensures fair match distribution among all participants

4. **Results**
   - View generated matches in a clear table format
   - Export results to Excel for further processing or printing

## Getting Started

1. Clone the repository:

2. Open `index.html` in your web browser

No additional installation or setup is required as the application runs entirely in the browser.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

[Your Name]

## Acknowledgments

- Bootstrap team for the UI framework
- SheetJS team for Excel functionality
