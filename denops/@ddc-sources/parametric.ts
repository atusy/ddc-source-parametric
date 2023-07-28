import {
  BaseSource,
  DdcOptions,
  Item,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v3.4.0/types.ts";
import { Denops } from "https://deno.land/x/ddc_vim@v3.4.0/deps.ts";

type Params = {
  items: Item[];
};

export class Source extends BaseSource<Params> {
  override gather(args: {
    denops: Denops;
    options: DdcOptions;
    sourceOptions: SourceOptions;
    sourceParams: Params;
    completeStr: string;
  }): Promise<Item[]> {
    const items = JSON.parse(JSON.stringify(args.sourceParams.items));
    return Promise.resolve(items);
  }

  override params(): Params {
    return { items: [] };
  }
}
