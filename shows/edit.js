function(doc, req) {  
  // !json templates.edit
  // !code vendor/couchapp/path.js
  // !code vendor/couchapp/template.js

  if (req.docId) {
    return template(templates.edit, {
      docid: toJSON((doc && doc._id) || null),
      reqid: req.docId,
      content: toJSON((doc && doc.content) || ""),
      assets: assetPath()
    });
  }
  else {
    return {"code": 302, "body": "See other", "headers": {"Location": "/" + currentPath() + "/FrontPage"}};
  }
}