install:
	npm ci

brain-games:
	node bin/brain-games.js

even:
	node src/helloEven.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
