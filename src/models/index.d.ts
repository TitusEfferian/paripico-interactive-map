import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerParipicoCircleSectionChild = {
  readonly circle_id: string;
  readonly circle_name: string;
}

type LazyParipicoCircleSectionChild = {
  readonly circle_id: string;
  readonly circle_name: string;
}

export declare type ParipicoCircleSectionChild = LazyLoading extends LazyLoadingDisabled ? EagerParipicoCircleSectionChild : LazyParipicoCircleSectionChild

export declare const ParipicoCircleSectionChild: (new (init: ModelInit<ParipicoCircleSectionChild>) => ParipicoCircleSectionChild)

type EagerParipicoCircle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ParipicoCircle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly section: string;
  readonly child: ParipicoCircleSectionChild[];
  readonly weight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParipicoCircle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ParipicoCircle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly section: string;
  readonly child: ParipicoCircleSectionChild[];
  readonly weight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ParipicoCircle = LazyLoading extends LazyLoadingDisabled ? EagerParipicoCircle : LazyParipicoCircle

export declare const ParipicoCircle: (new (init: ModelInit<ParipicoCircle>) => ParipicoCircle) & {
  copyOf(source: ParipicoCircle, mutator: (draft: MutableModel<ParipicoCircle>) => MutableModel<ParipicoCircle> | void): ParipicoCircle;
}