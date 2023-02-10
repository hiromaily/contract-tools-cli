import {Command, Flags} from '@oclif/core'

export default class Hogehoge extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  // Handle flags
  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  // Main
  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Hogehoge)

    const name = flags.name ?? 'world'
    this.log(`hello ${name}`)
  }
}
