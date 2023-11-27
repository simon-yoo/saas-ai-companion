import { Redis } from '@upstash/redis'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { PineconeClient } from '@pinecone-database/pinecone'
import { PineconeStore } from 'langchain/vectorstores/pinecone'


export type CompanionKey ={
    companionName: string
    modelName: string
    userId: string

}

export class MemoryManager{
    private static instance: MemoryManager
    private history: Redis
    pricate vector
}