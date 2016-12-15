# coveo-mock-conversion
Mock Coveo Conversion [for Coveo Cloud V1 platform] for testing pre/post conversion scripts

This mock-conversion script is meant to basically smoke test your post conversion script (also known as Custom Script in Coveo Cloud V1) because there is currently no way to debug or see traces within the Coveo Cloud V1 platform which can be very annoying. This script is taking 2 mandatory input parameters : your environment and your conversion script. You first need to specify a mock environment (JSON format) which will represent a list of fake indexed documents that will be used as input for the conversion script. Common conversion script tasks: Update the document extracted text and HTML, read and modify metadata, reject documents, etc.

## Install
    npm install

## Mock conversion example usage

    node mocking-script -h

Output : 
```
Usage: mocking-script [options] <env> <script>

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number
    -c, --chdir <path>            change the working directory
    -t, --conversion-type <type>  conversion type
    -b, --show-body               printing final body
```

    node mocking-script samples/env.sample-documents.js samples/custom-script.sample.js -b

Output :
```
{
  "Title": "Test 1 page",
  "URI": "http://www.perdu.com/test1",
  "Metadata": {
    "metadata1": "metadata1",
    "metadata2": "metadata2",
    "metadata3": "metadata3"
  },
  "IsValid": true,
  "SummaryConcepts": "",
  "Language": "1",
  "Source": "Sitemap - fake source"
}
Final Body >>> <html><body>This is a custom View As HTML stream set by a postconversion script!</body></html>
{
  "Title": "Test 2 page",
  "URI": "http://www.perdu.com/test2",
  "Metadata": {
    "metadata1": "metadata1",
    "metadata2": "metadata2",
    "metadata3": "metadata3"
  },
  "IsValid": true,
  "SummaryConcepts": "",
  "Language": "1",
  "Source": "Sitemap - fake source"
}
Final Body >>> <html><body>This is a custom View As HTML stream set by a postconversion script!</body></html>
{
  "Title": "Test 3 page",
  "URI": "http://www.perdu.com/test3",
  "Metadata": {
    "metadata1": "metadata1",
    "metadata2": "metadata2",
    "metadata3": "metadata3"
  },
  "IsValid": true,
  "SummaryConcepts": "",
  "Language": "1",
  "Source": "Sitemap - fake source"
}
Final Body >>> <html><body>This is a custom View As HTML stream set by a postconversion script!</body></html>
{
  "Title": "Test 4 page",
  "URI": "http://www.perdu.com/test4",
  "Metadata": {
    "metadata1": "metadata1",
    "metadata2": "metadata2",
    "metadata3": "metadata3"
  },
  "IsValid": true,
  "SummaryConcepts": "",
  "Language": "1",
  "Source": "Sitemap - fake source"
}
Final Body >>> <html><body>This is a custom View As HTML stream set by a postconversion script!</body></html>
{
  "Title": "Test 5 page",
  "URI": "http://www.perdu.com/test5",
  "Metadata": {
    "metadata1": "metadata1",
    "metadata2": "metadata2",
    "metadata3": "metadata3"
  },
  "IsValid": true,
  "SummaryConcepts": "",
  "Language": "1",
  "Source": "Sitemap - fake source"
}
Final Body >>> <html><body>This is a custom View As HTML stream set by a postconversion script!</body></html>
```

## Example of a fake environment documents
```
[
    {
        "URI": "http://www.perdu.com/test1",
        "Title": "Test 1 page",
        "Source" : "Sitemap - fake source",
        "Metadata": {
        },
        "Body":"<html><body><div>this is a test page 1 html<\/div><\/body><\/html>"
    },
    {
        "URI": "http://www.perdu.com/test2",
        "Title": "Test 2 page",
        "Source" : "Sitemap - fake source",
        "Metadata": {
        },
        "Body":"<html><body><div>this is a test page 2 html<\/div><\/body><\/html>"
    },
    {
        "URI": "http://www.perdu.com/test3",
        "Title": "Test 3 page",
        "Source" : "Sitemap - fake source",
        "Metadata": {
        },
        "Body":"<html><body><div>this is a test page 3 html<\/div><\/body><\/html>"
    },
    {
        "URI": "http://www.perdu.com/test4",
        "Title": "Test 4 page",
        "Source" : "Sitemap - fake source",
        "Metadata": {
        },
        "Body":"<html><body><div>this is a test page 4 html<\/div><\/body><\/html>"
    },
    {
        "URI": "http://www.perdu.com/test5",
        "Title": "Test 5 page",
        "Source" : "Sitemap - fake source",
        "Metadata": {
        },
        "Body":"<html><body><div>this is a test page 5 html<\/div><\/body><\/html>"
    }
]

```

## Conversion/Custom script samples

Keep in mind that Coveo conversion script are in fact only [*For Coveo Cloud V1*] supporting `JScript` language which is different than `Javascript` as you may think.


>JScript is the Microsoft dialect of the ECMAScript scripting language specification.
>
>
>JavaScript (the Netscape/Mozilla implementation of the ECMA specification), JScript, and ECMAScript are very similar >languages. In fact the name `JavaScript` is often used to refer to ECMAScript or JScript.
>
>
>Microsoft uses the name JScript for its implementation to avoid trademark issues ([JavaScript](http://en.wikipedia.org/wiki/JavaScript) is a trademark of [Oracle Corporation](http://tsdr.uspto.gov/#caseNumber=75026640&caseType=SERIAL_NO&searchType=statusSearch))
>
>
>From Wikipedia: <http://en.wikipedia.org/wiki/Jscript>

* DocumentInfo Object reference link : <http://api.developers.coveo.com/ces/7.0/#CESCustomConverter~DocumentInfo.html>
* PostConversion Object reference link : <http://api.developers.coveo.com/ces/7.0/#CESCustomConverter~PostConversion.html>
* [Postconversion Script Sample](https://developers.coveo.com/display/public/Converter/Postconversion+Script+Samples)


