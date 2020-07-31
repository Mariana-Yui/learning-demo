#! /usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');

program
    .command('module')
    .alias('m')
    .description('创建新模块')
    .option('-a, --name [moduleName]', '模块名称')
    .action((option) => {
        // option.options 包含option()内容的数组
        const config = Object.assign({
            moduleName: null,
            description: null,
            sass: false,
            less: false
        });
        const prompt = [];

        if (typeof config.moduleName !== 'string') {
            prompt.push({
                type: 'input',
                name: 'moduleName',
                message: '请输入模块名称',
                validate: (input) => {
                    if (!input) {
                        return '模块不能为空';
                    }
                    return true;
                }
            });
        }
        if (typeof config.description !== 'string') {
            prompt.push({
                type: 'input',
                name: 'description',
                message: '请输入模块描述'
            });
        }
        if (config.sass === false && config.less === false) {
            prompt.push({
                type: 'list',
                name: 'cssPretreatment',
                message: 'css预处理器',
                choices: [
                    {
                        name: 'Sass/Compass',
                        value: 'sass'
                    },
                    {
                        name: 'Less',
                        value: 'less'
                    }
                ]
            });
        }

        inquirer.prompt(prompt).then((answer) => {
            console.log(answer);
        });
    })
    // 自定义帮助内容
    .on('--help', () => {
        console.log(' Example:');
        console.log('');
        console.log('app module moduleName');
        console.log('app m moduleName');
    });

program.parse(process.argv);
