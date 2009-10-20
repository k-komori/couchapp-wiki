function(doc) {
  // !code vendor/dateformat.js

  if (doc.type == "page") {
    emit(new DateFormat("yyyy/MM/dd").format(new Date(doc.updated_at)), {
      title: doc._id,
    });
  }
};