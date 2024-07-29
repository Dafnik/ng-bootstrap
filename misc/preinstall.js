if (process.env.npm_execpath.indexOf('pnpm') === -1) {
	throw new Error(`

  ###################################################
  #                                                 #
  #  Please use pnpm > 9 to install dependencies    #
  #                                                 #
  #  1. Install pnpm (https://pnpm.io/installation) #
  #  2. Run 'pnpm install' instead of 'npm install' #
  #                                                 #
  ###################################################
  `);
}
