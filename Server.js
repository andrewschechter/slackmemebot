var port = process.env.PORT || 3000;
uas-meme-bot.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});