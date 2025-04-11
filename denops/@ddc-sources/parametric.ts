import type { Denops } from "jsr:@denops/core@~7.0.0";
import { BaseSource } from "jsr:@shougo/ddc-vim@~9.4.0/source";
import type {
	DdcOptions,
	Item,
	SourceOptions,
} from "jsr:@shougo/ddc-vim@~9.4.0/types";

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
		const items = args.sourceParams.items;
		return Promise.resolve(items);
	}

	override params(): Params {
		return { items: [] };
	}
}
