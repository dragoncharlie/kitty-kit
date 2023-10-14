/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
	testEnvironment: 'jsdom',
	preset: 'ts-jest',
	testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/styleMock.js',
	},
}

export default config
