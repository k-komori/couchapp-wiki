function(doc, req) {  
  // !json templates.page
  // !code vendor/couchapp/path.js
  // !code vendor/couchapp/template.js
  // !code vendor/wiki2html.js

  if (doc) {
    return template(templates.page, {
      docid: req.docId,
      content: doc.content.wiki2html(),
      assets: assetPath(),
      editurl: showPath() + "/edit/" + req.docId
    });
  }
  else if (req.docId) {
    return {"code": 302, "headers": {"Location": showPath() + "/edit/" + req.docId}};
  }
  else {
    return {"code": 302, "headers": {"Location": "/" + currentPath() + "/FrontPage"}};
  }
}