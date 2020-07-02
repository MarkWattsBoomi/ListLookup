# This simple component can be used on a page to convert an enum value to a textual value where there's a list of options to look it up in

It requires the list to be of ListOption objects and it will do the lookup based on the numericValue attribute and return the Label attribute.

You specify the lookup list in the component's dataset and the value to look up in its state.

On the page you see the components Label attribute + " " + looked up value

{
    "developerName": "ListOption",
    "developerSummary": null,
    "elementType": "TYPE",
    "properties": [
        {
            "contentFormat": null,
            "contentType": "ContentString",
            "developerName": "stringValue",
            "typeElementDeveloperName": null,
            "typeElementId": null
        },
        {
            "contentFormat": null,
            "contentType": "ContentString",
            "developerName": "Label",
            "typeElementDeveloperName": null,
            "typeElementId": null
        },
        {
            "contentFormat": null,
            "contentType": "ContentBoolean",
            "developerName": "booleanValue",
            "typeElementDeveloperName": null,
            "typeElementId": null
        },
        {
            "contentFormat": null,
            "contentType": "ContentNumber",
            "developerName": "numericValue",
            "typeElementDeveloperName": null,
            "typeElementId": null
        }
    ]
}