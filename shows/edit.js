function(doc, req) {  
  // !json templates.edit
  // !code vendor/couchapp/path.js
  // !code vendor/couchapp/template.js
  // !code vendor/wiki2html.js

  if (doc) {
    // we only show html
    return template(templates.edit, {
      docid: toJSON((doc && doc._id) || null),
      content: doc.content.wiki2html(),
      assets: assetPath()
    });
  }
  else if (req.docId) {
    return {"code": 302, "body": "See other", "headers": {"Location": "/"}};
  }
  else {
    return {"code": 302, "body": "See other", "headers": {"Location": "/" + currentPath() + "/FrontPage"}};
  }
}