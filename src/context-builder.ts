import { ContextItem } from './context-items';
import { Context, Optional } from './context';
import { Location } from './base';

export class ContextBuilder {
  private readonly preStack: ContextItem[] = [];
  private readonly stack: ContextItem[] = [];
  private fields: string[] = [];
  private locations: Location[] = [];
  private message: any;
  private optional: Optional = false;

  setFields(fields: string[]) {
    this.fields = fields;
    return this;
  }

  setLocations(locations: Location[]) {
    this.locations = locations;
    return this;
  }

  setMessage(message: any) {
    this.message = message;
    return this;
  }

  addItem(...items: ContextItem[]) {
    this.stack.push(...items);
    return this;
  }

  addPreItem(...items: ContextItem[]) {
    this.preStack.push(...items);
    return this;
  }

  setOptional(options: Optional) {
    this.optional = options;
    return this;
  }

  build() {
    return new Context(
      this.fields,
      this.locations,
      this.stack,
      this.preStack,
      this.optional,
      this.message,
    );
  }
}
