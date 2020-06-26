module.exports = async (page, comment, delay) => {
  const navigationPromise = page.waitForNavigation();

  let i = 1;

  setInterval(async () => {
    console.log('comentario:', i);

    // clicar no campo de comentario
    await page.waitForSelector('textarea[class="Ypffh"]');
    await page.click('textarea[class="Ypffh"]');

    // escrever comentario
    console.log('escrevendo...');
    await page.keyboard.type(comment);

    // clicar em publicar
    await page.waitForSelector('button[type="submit"]');
    await page.click('button[type="submit"]');

    await navigationPromise;

    i++;
  }, parseInt(delay) * 60000);
}