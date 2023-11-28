import { StreamingTextResponse, LangChainStream } from 'ai'
import { auth, currentUser } from '@clerk/nextjs'
import { CallbackManager } from 'langchain/callbacks'
import { Replicate } from 'langchain/llms/replicate'
import { NextResponse } from 'next/server'

import { MemoryManager } from '@/lib/memory'
import { rateLimit } from '@/lib/rate-limit'
import prismadb from '@/lib/prismadb'
