'use client'
import {FormEvent, useState} from 'react'

const isValidAmazonProductURL = (url: string) => {
  try{
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')){
      return true;
    }
  } catch(error){
      return false;
  }
  return false;
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValidLink = isValidAmazonProductURL(searchPrompt);

      alert(isValidLink ? 'Valid Link' : 'Invalid link')
    }

  return (
    <form className='flex flex-wrap gap-4 mt-12'
    onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter product link' value={searchPrompt} onChange={(e) => setSearchPrompt(e.target.value)} className='searchbar-input'/>
        <button type='submit' className='searchbar-btn'>
            Search
        </button>
    </form>
  )
}

export default Searchbar