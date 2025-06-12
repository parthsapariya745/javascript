let a = 10, b = 20;
try {
  if (a != b) {
    throw new Error("invalid");
  }
} catch (e) {
  console.log(e.message);
}