# Bing Maps V8 TypeScript Definitions

These are the official TypeScript definitions for the Bing Maps V8 SDK. 

![Bing Maps V8 Intellisense](images/V8Intellisense.gif "Bing Maps V8 Intellisense")


## How to get the definitions

**Use the NuGet Package**

Using the NuGet package will make it easy to both add the definitions to your project and to also keep them up to date.

//TODO: Add more details

**Download definitions**

Simply press the download button for this repository. Unzip the downloaded file, and copy the contents into your project. Note that you will need to do this process this again from time to time if you want to have the most recent definitions. This should only be needed if you want use newer features.

## Usage

If using Visual Studio, you can add a reference to the core Bing MAps V8 functionality by adding the following to the top of your TypeScript file. 

```
/// <reference path="scripts/MicrosoftMaps/Microsoft.Maps.d.ts" />
```
If you want to also use some of the Bing Maps modules, you can either update the above reference to the following:

```
/// <reference path="scripts/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
```

or you can add a reference to the individual module definitions.

| Module                                                                          | Path                                                     |
|---------------------------------------------------------------------------------|----------------------------------------------------------|
| [Autosuggest](https://msdn.microsoft.com/en-us/library/mt712650.aspx)           | scripts/MicrosoftMaps/Modules/Autosuggest.d.ts           |
| [Clustering](https://msdn.microsoft.com/en-us/library/mt712807.aspx)            | scripts/MicrosoftMaps/Modules/Clustering.d.ts            |
| [Directions](https://msdn.microsoft.com/en-US/library/mt748655.aspx)            | scripts/MicrosoftMaps/Modules/Directions.d.ts            |
| [Drawing Tools](https://msdn.microsoft.com/en-us/library/mt750543.aspx)         | scripts/MicrosoftMaps/Modules/DrawingTools.d.ts          |
| [GeoJSON](https://msdn.microsoft.com/en-us/library/mt712806.aspx)               | scripts/MicrosoftMaps/Modules/GeoJSON.d.ts               |
| [Heat Map Layer](https://msdn.microsoft.com/en-us/library/mt712868.aspx)        | scripts/MicrosoftMaps/Modules/HeatMapLayer.d.ts          |
| [Search](https://msdn.microsoft.com/en-us/library/mt712846.aspx)                | scripts/MicrosoftMaps/Modules/Search.d.ts                |
| [Spatial Data Services](https://msdn.microsoft.com/en-us/library/mt712849.aspx) | scripts/MicrosoftMaps/Modules/SpatialDataServices.d.ts   |
| [Spatial Math](https://msdn.microsoft.com/en-us/library/mt712834.aspx)          | scripts/MicrosoftMaps/Modules/SpatialMath.d.ts           |
| [Traffic](https://msdn.microsoft.com/en-us/library/mt712860.aspx)               | scripts/MicrosoftMaps/Modules/Traffic.d.ts               |
| [Well Known Text](https://msdn.microsoft.com/en-us/library/mt712880.aspx)       | scripts/MicrosoftMaps/Modules/WellKnownText.d.ts         |

## Screenshots

//TODO: Add more details

![Bing Maps V8 Event Intellisense](images/V8EventIntellisense.gif "Bing Maps V8 Event Intellisense")

//TODO: Add more details

![Bing Maps V8 Load Module Intellisense](images/V8LoadModuleIntellisense.gif "Bing Maps V8 Load Module Intellisense")

## Additional Resources

//TODO: Add more details


## Q & A

- **Q: When will new Bing Maps features be added to these defintions.**
  - **A:** New features will added to the definitions when they have graduated out of the experimental branch and into the main release branch ov V8. This will often be done in parallel with MSDN documntation updates.

## Contributing

We welcome contributions. Feel free to file issues and pull requests on the repo and we'll address them as we can. Learn more about how you can help on our [Contribution Rules & Guidelines](https://github.com/Microsoft/Cognitive-Vision-Windows/blob/master/CONTRIBUTING.md). 

You can reach out to us anytime with questions and suggestions using our communities below:
* [MSDN Forums](https://social.msdn.microsoft.com/Forums/en-US/home?forum=bingmapsajax&filter=alltypes&sort=lastpostdesc)
* [StackOverflow](http://stackoverflow.com/questions/tagged/bing-maps)

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

See [License]() for full license text.