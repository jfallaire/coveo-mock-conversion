// ****************************************************************************
//  This postconversion script sample changes the default View As HTML version
//  of the document + adds custom metadata
// ****************************************************************************
  
// Build a new document content stream.
var documentContent = "This is a custom document content set by a postconversion script!";
// Set the document content stream.
PostConversion.TextToOverride.WriteString(documentContent);
// Build a new View As HTML stream.
var viewAsHTML = "";
viewAsHTML += "<html><body>";
viewAsHTML += "This is a custom View As HTML stream set by a postconversion script!";
viewAsHTML += "</body></html>";
// Set the View As HTML stream.
PostConversion.HTMLOutputToOverride.WriteString(viewAsHTML);

DocumentInfo.SetFieldValue('metadata1', 'metadata1');
DocumentInfo.SetFieldValue('metadata2', 'metadata2');
DocumentInfo.SetFieldValue('metadata3', 'metadata3');
