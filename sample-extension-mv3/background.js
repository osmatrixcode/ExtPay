importScripts("ExtPay.js");

// To test payments, replace 'sample-extension' with the ID of
// the extension you registered on ExtensionPay.com. You may
// need to uninstall and reinstall the extension.
// And don't forget to change the ID in popup.js too!
const extpay = ExtPay("tunevo-test");
extpay.startBackground(); // this line is required to use ExtPay in the rest of your extension

extpay.getUser().then((user) => {
  console.log(user);
});
