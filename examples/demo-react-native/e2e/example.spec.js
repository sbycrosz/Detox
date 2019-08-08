describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should scroll to RED_BOX', async () => {
    await waitFor(element(by.id('RED_BOX')))
      .toBeVisible()
      // .whileElement(by.id('SCROLL_VIEW')).scroll(250, 'down');
      .whileElement(by.id('SCROLL_VIEW')).scroll(250, 'down', 0.5, 0.5);
  });
});